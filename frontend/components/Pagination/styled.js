import styled from 'styled-components';

const StyledPagination = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid ${props => props.theme.lightGrey};
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid ${props => props.theme.lightGrey};
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
  .prev:hover,
  .next:hover {
    background-color: ${props => props.theme.red};
    color: white;
  }
  .prev:hover {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .next:hover {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export default StyledPagination;
