import StyledPriceTag from './styled';
import formatMoney from '../../lib/formatMoney';

const PriceTag = ({ price }) => <StyledPriceTag>{formatMoney(price)}</StyledPriceTag>;

export default PriceTag;
