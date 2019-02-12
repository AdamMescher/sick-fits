import React, { Component } from 'react';
import { Query } from 'react-apollo';
import DisplayError from '../../components/DisplayError/index';
import { SINGLEITEM_SINGLE_ITEM_QUERY } from '../../lib/queries';
import StyledSingleItem from './styled';
import Head from 'next/head';

class SingleItem extends Component {
  render() {
    const { id } = this.props;
    return (
      <Query
        query={SINGLEITEM_SINGLE_ITEM_QUERY}
        variables={{
          id
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <DisplayError error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No Item Found for {id}</p>;
          return (
            <StyledSingleItem>
              <Head>
                <title>Sick Fits | {data.item.title}</title>
              </Head>
              <img src={data.item.largeImage} alt={data.item.title} />
              <div className="details">
                <h2>{data.item.title}</h2>
                <p>{data.item.description}</p>
              </div>
            </StyledSingleItem>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;
