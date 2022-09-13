import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeadContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const Title = styled.h1`
  font-size: 72px;
  margin-bottom: 14px;
  color: #fff;
`;
export const Span = styled.span`
  color: #000;
  font-size: 72px;
`;
export const Caption = styled.p`
  color: #7c7a7a;
`;
export const Line = styled.hr`
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;
export const StyledNavLink = styled(NavLink)`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border: none;
  color: white;
  background-color: #219df3;
`;
