import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/auth-selectors';
import { signIn } from '../../redux/auth/auth-operations';
import style from './LogInPage.module.css';

function LogInPage() {
  const dispatch = useDispatch();
  const logged = useSelector(selectIsLoggedIn)

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password} = e.target.elements;
    const userSignIn = {
      email: email.value,
      password: password.value,
    };
    dispatch(signIn(userSignIn))
    console.log(userSignIn);
    console.log(logged)
  };
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Log In</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="inputLogInEmail"></label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="inputLogInEmail"
        />

        <label htmlFor="inputLogInPassword"></label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="inputLogInPassword"
        />

        <button className={style.btn}>Log In</button>
      </form>
    </div>
  );
}

export default LogInPage;
