import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import StyledForm from '../Form/styled';
import formatMoney from '../../lib/formatMoney';

class CreateItem extends Component {
    state = {
        title: '',
        description: '',
        image: '',
        largeImage: '',
        price: 0
    };

    handleChange = (event) => {
        const { name, type, value } = event.target;
        const val = type === 'number' ? parseFloat(value) : value;
        this.setState({ [name]: val });
    }

    render() {
        return (
            <StyledForm>
                <fieldset>
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
                </fieldset>
            </StyledForm>
        )
    }
}

export default CreateItem;