import Link from 'next/link';
import StyledNav from './styled';
import User from '../User/index';

const Nav = () => (
  <StyledNav>
    <User>
      {({ data: { me } }) => {
        if (me) return <p>{me.name}</p>;
        return null;
      }}
    </User>
    <Link href="/items">
      <a>Shop</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/signup">
      <a>Sign Up</a>
    </Link>
    <Link href="/orders">
      <a>Orders</a>
    </Link>
    <Link href="/me">
      <a>Account</a>
    </Link>
  </StyledNav>
);

export default Nav;
