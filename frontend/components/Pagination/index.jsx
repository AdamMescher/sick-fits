import React from 'react';
import { Query } from 'react-apollo';
import PaginationStyles from '../styles/PaginationStyles';
import Head from 'next/head';
import Link from 'next/link';
import { PAGINATION_QUERY } from '../../lib/queries';
import { perPage } from '../../config';

const Pagination = ({ page }) => (
  <Query query={PAGINATION_QUERY}>
    {({ data, loading, error, refetch }) => {
      refetch();
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Error: {error.message}</p>;
      }
      const count = data.itemsConnection.aggregate.count;
      const pages = Math.ceil(count / perPage);

      return (
        <PaginationStyles>
          <Head>
            <title>
              Sick Fits! - Page {page} of {pages}
            </title>
          </Head>
          <Link
            prefetch
            href={{
              pathname: 'items',
              query: { page: page - 1 }
            }}
          >
            <a className="prev" aria-disabled={page <= 1}>
              ← Prev
            </a>
          </Link>
          <p>
            Page {page} of {pages}
          </p>
          <p>{count} Items Total</p>
          <Link
            prefetch
            href={{
              pathname: 'items',
              query: { page: page + 1 }
            }}
          >
            <a className="next" aria-disabled={page >= pages}>
              Next →
            </a>
          </Link>
        </PaginationStyles>
      );
    }}
  </Query>
);

export default Pagination;
