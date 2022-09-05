import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  color: black;

  :hover,
  :focus {
    color: red;
  }
  :disabled {
    color: grey;
  }
`;
