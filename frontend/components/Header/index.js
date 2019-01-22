import StyledHeader from './styled';
import Logo from '../Logo/index';
import Nav from '../Nav/index';

const Header = () => (
    <StyledHeader>
        <div className="bar">
            <Logo />
            <Nav />
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <div className="cart">Cart</div>
    </StyledHeader>
)

export default Header;