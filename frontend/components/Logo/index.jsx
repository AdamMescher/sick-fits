import Link from 'next/link';
import StyledLogo from './styled';

const Logo = () => (
    <StyledLogo>
        <Link href="/">
            <a>Sick Fits!</a>
        </Link>
    </StyledLogo>
)

export default Logo;