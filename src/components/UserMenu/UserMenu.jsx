import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import { selectUserName } from '../../redux/auth/auth-selectors';
import style from './UserMenu.module.css';

function UserMenu() {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <div className={style.wrapper}>
      {name && <p className={style['user-name']}>{name}</p>}
      <button className={style.btn} onClick={() => dispatch(logOut())}>
        Sign out
      </button>
    </div>
  );
}

export default UserMenu;
