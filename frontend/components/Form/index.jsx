import StyledForm from './styled';

const Form = ({ children, method, onSubmit }) => (
  <StyledForm method={method || 'get'} onSubmit={onSubmit}>
    {children}
  </StyledForm>
);

export default Form;
