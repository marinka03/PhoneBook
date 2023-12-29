import { Toaster } from 'react-hot-toast';
import ContactsPage from 'pages/ContactPage';
import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './AppLayout/AppLayout';
import GlobalStyles from './GlobalStyles';
import RegistrationPage from 'pages/RegistrationPage';
import LogInPage from 'pages/LogInPage';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentUser } from '../redux/auth/auth-operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route
            path="/register"
            element={
              <Suspense>
                <RegistrationPage />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense>
                <LogInPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
      <GlobalStyles />
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: '#D7F4E7',
            },
          },
          error: {
            style: {
              background: '#f3d6d9',
            },
          },
          custom: {
            style: {
              background: '#c6e0ec',
            },
          },
        }}
      />
    </>
  );
};

export default App;
