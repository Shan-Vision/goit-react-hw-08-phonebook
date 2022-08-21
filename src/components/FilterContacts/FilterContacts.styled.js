import styled from 'styled-components';

export const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 25px;
`;

export const FilterInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 4px 8px;
  border-radius: 4px;
  outline: none;
  border: 1px solid grey;
  font-size: 16px;
  font-family: inherit;
  :hover,
  :focus {
    border: 2px solid #719ece;
    box-shadow: 0 0 5pt 0.5pt #999;
  }
`;
