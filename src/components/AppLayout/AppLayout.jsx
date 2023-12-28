import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './AppLayout.module.css';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function AppLayout() {
  return (
    <>
      <Header />
      <div className={style.area}>
        <ul className={style.circles}>
          {arr.map(() => (
            <li key={Math.random() * 3}></li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default AppLayout;
