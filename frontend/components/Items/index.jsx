import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Item from '../Item/index';
import Centered from '../Centered';
import ItemsList from '../ItemsList';
import { ALL_ITEMS_QUERY } from '../../lib/queries';

class Items extends Component {
    render() {
        return (
            <Centered>
                <Query query={ALL_ITEMS_QUERY}>
                    {({ data, error, loading }) => {
                        if (loading) {
                            return <p>Loading...</p>
                        }

                        if (error) {
                            return <p>Error: {error.message}</p>
                        }

                        return (
                            <ItemsList>
                                {data.items.map(item => <Item item={item} key={item.id} />)}
                            </ItemsList>
                        )
                    }}
                </Query>
            </Centered>
        )
    }
}

export default Items;
