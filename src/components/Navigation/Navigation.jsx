import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/auth-selectors';
import styled from 'styled-components';
import style from './Navigation.module.css';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #deb887;
  font-size: 18px;
  font-weight: 600;

  &.active {
    color: #efdcc3;
  }
`;
function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={style.nav}>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </nav>
  );
}

export default Navigation;
