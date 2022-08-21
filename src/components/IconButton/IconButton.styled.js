import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
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
