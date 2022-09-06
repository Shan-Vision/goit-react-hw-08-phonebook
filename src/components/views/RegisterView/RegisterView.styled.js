import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyle = styled(Form)`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-radius: 4px;
`;
export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  height: 40px;
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
export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;
export const Button = styled.button`
  margin: 0 auto;
  width: 50%;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border: none;
  color: white;
  background-color: #219df3;
  &:nth-child(2) {
    background-color: #eb3941;
  }
`;
