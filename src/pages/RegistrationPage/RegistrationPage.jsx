import React from 'react';
import { useDispatch } from 'react-redux';
import { createNewUser } from '../../redux/auth/auth-operations';
import style from './RegistrationPage.module.css';
function RegistrationPage() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const newUser = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(createNewUser(newUser));
    console.dir(newUser);
  };
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Sign Up</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="inputName"></label>
        <input type="text" placeholder="Name" name="name" id="inputName" />

        <label htmlFor="inputEmail"></label>
        <input type="email" placeholder="Email" name="email" id="inputEmail" />

        <label htmlFor="inputPassword"></label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="inputPassword"
        />
        <button className={style.btn}>Sign Up</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
