import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Item from '../Item/index';
import Centered from '../Centered/index';
import ItemsList from '../ItemsList/index';
import Pagination from '../Pagination/index';
import { ALL_ITEMS_QUERY } from '../../lib/queries';
import { perPage } from '../../config';

class Items extends Component {
  render() {
    const { page } = this.props;
    return (
      <Centered>
        <Pagination page={page} />
        <Query
          query={ALL_ITEMS_QUERY}
          variables={{
            skip: page * perPage - perPage
          }}
        >
          {({ data, error, loading }) => {
            if (loading) {
              return <p>Loading...</p>;
            }

            if (error) {
              return <p>Error: {error.message}</p>;
            }
            return (
              <ItemsList>
                {data.items.map(item => (
                  <Item item={item} key={item.id} />
                ))}
              </ItemsList>
            );
          }}
        </Query>
        <Pagination page={page} />
      </Centered>
    );
  }
}

export default Items;
