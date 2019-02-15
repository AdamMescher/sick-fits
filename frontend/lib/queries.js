import gql from 'graphql-tag';
import { perPage } from '../config';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    items(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const UPDATEITEM_SINGLE_ITEM_QUERY = gql`
  query UPDATEITEM_SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
    }
  }
`;

const SINGLEITEM_SINGLE_ITEM_QUERY = gql`
  query SINGLEITEM_SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
    }
  }
`;

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

export {
  ALL_ITEMS_QUERY,
  UPDATEITEM_SINGLE_ITEM_QUERY,
  SINGLEITEM_SINGLE_ITEM_QUERY,
  PAGINATION_QUERY
};
