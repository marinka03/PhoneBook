import React from 'react';
import { useDispatch } from 'react-redux';
import { createNewUser } from '../../redux/auth/auth-operations';
import Form from 'components/Form';

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
    <>
      <Form handleSubmit={handleSubmit} title='Sing Up'/>
    </>
  );
}

export default RegistrationPage;
