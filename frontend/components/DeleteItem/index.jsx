import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { DELETE_ITEM_MUTATION } from '../../lib/mutations';
import { ALL_ITEMS_QUERY } from '../../lib/queries';

class DeleteItem extends Component {
  update = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
    data.items = data.items.filter(item => item.id !== payload.data.deleteItem.id);
    cache.writeQuery({ query: ALL_ITEMS_QUERY, data });
  };
  render() {
    const { id } = this.props;
    return (
      <Mutation mutation={DELETE_ITEM_MUTATION} variables={{ id }} update={this.update}>
        {(deleteItem, { error }) => (
          <button
            className="delete-item"
            onClick={() => {
              if (confirm('Are you sure you want to delete this item?')) {
                deleteItem();
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteItem;
