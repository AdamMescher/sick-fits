import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import DeleteItem from '../DeleteItem/index';
import Title from '../styles/Title';
import StyledItem from './styled';
import PriceTag from '../styles/PriceTag';
import formatMoney from '../../lib/formatMoney';
export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;
    return (
      <StyledItem>
        {item.image && <img src={item.image} alt={item.title} />}
        <Title>
          <Link
            href={{
              pathname: '/item',
              query: { id: item.id }
            }}
          >
            <a>{item.title}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <p>{item.description}</p>
        <div className="buttonList">
          <Link
            href={{
              pathname: 'update',
              query: { id: item.id }
            }}
          >
            <button className="edit-item">Edit ✏️</button>
          </Link>
          <button className="add-to-cart">Add To Cart 🛒</button>
          <DeleteItem className="delete-item" id={item.id}>
            Delete Item ⛔
          </DeleteItem>
        </div>
      </StyledItem>
    );
  }
}
