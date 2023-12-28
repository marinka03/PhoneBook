import AuthNav from 'components/AuthNav';
import Filter from 'components/Filter';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/auth-selectors';
import style from './Header.module.css';

function Header() {
  const { pathname } = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        {pathname === '/contacts' && <Filter />}
      </div>
    </header>
  );
}

export default Header;
