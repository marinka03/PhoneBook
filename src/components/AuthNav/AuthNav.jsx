import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import style from './AuthNav.module.css';
import { theme } from 'vars';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${theme.color.light};
  font-size: 18px;
  font-weight: 600;

  &.active {
    color: ${theme.color.orange};
  }
`;

function AuthNav() {
  return (
    <div className={style.auth}>
      <StyledNavLink to="/register">Sign up</StyledNavLink>
      <StyledNavLink to="/login">Log in</StyledNavLink>
    </div>
  );
}

export default AuthNav;
