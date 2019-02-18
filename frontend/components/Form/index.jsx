import StyledForm from './styled';

const Form = ({ children, method }) => <StyledForm method={method || 'get'}>{children}</StyledForm>;

export default Form;
