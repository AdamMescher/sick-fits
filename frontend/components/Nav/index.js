import Link from 'next/link';
import StyledNav from './styled';

const Nav = () => (
    <StyledNav>
        <Link href="/items">
            <a>Items</a>
        </Link>
        <Link href="/sell">
            <a>Sell</a>
        </Link>
    </StyledNav>
)

export default Nav;