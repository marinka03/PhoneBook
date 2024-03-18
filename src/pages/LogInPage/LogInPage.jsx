import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/auth-selectors';
import { signIn } from '../../redux/auth/auth-operations';
import Form from 'components/Form';

function LogInPage() {
  const dispatch = useDispatch();
  const logged = useSelector(selectIsLoggedIn);

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const userSignIn = {
      email: email.value,
      password: password.value,
    };
    dispatch(signIn(userSignIn));
    console.log(userSignIn);
    console.log(logged);
  };
  return (
    <>
      <Form handleSubmit={handleSubmit} title="Log In" />
    </>
  );
}

export default LogInPage;
