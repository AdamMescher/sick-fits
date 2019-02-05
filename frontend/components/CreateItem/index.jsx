import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import StyledForm from '../Form/styled';
import DisplayError from '../DisplayError/index';
import formatMoney from '../../lib/formatMoney';
import { CREATE_ITEM_MUTATION } from '../../lib/mutations';

class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0
  };

  handleChange = event => {
    const { name, type, value } = event.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        {(createItem, { loading, error }) => (
          <StyledForm
            onSubmit={async event => {
              event.preventDefault();
              const response = await createItem();
              Router.push({
                pathname: '/item',
                query: { id: response.data.createItem.id }
              });
            }}
          >
            <DisplayError error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title!"
                  required
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="price">
                Price
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Price!"
                  required
                  value={this.state.price}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="description">
                Description
                <textarea
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Description!"
                  required
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </fieldset>
          </StyledForm>
        )}
      </Mutation>
    );
  }
}

export default CreateItem;
