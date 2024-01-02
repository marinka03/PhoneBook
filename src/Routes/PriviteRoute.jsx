import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

function PriviteRoute({ component: Component, redirectTo = '/' }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}

export default PriviteRoute;
