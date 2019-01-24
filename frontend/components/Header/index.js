import StyledHeader from './styled';
import Logo from '../Logo/index';
import Nav from '../Nav/index';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
    NProgress.start();
}

Router.onRouteChangeComplete = () => {
    NProgress.done();
}

Router.onRouteChangeError = () => {
    NProgress.done();
}

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