import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import StyledItem from './styled';
import DeleteItem from '../DeleteItem/index';
import Title from '../Title/index';
import PriceTag from '../PriceTag/index';
export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;
    return (
      <StyledItem>
        {item.image && <img src={item.image} alt={item.title} />}
        <Title item={item} />
        <PriceTag price={item.price} />
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
