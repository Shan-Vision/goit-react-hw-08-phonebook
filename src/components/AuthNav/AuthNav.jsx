import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size:20px;
  color: #0f1011;

  &.active {
    color: #e84a5f;
  }
`;

export default function AuthNav() {
  return (
    <div>
      <Link to="/register">Регистрация</Link>
      <Link to="/login">Логин</Link>
    </div>
  );
}
