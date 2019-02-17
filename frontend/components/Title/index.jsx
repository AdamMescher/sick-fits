import StyledTitle from './styled';
import Link from 'next/link';

const Title = ({ item }) => (
  <StyledTitle>
    <Link
      href={{
        pathname: '/item',
        query: { id: item.id }
      }}
    >
      <a>{item.title}</a>
    </Link>
  </StyledTitle>
);

export default Title;
