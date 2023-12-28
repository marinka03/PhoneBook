import { Toaster } from 'react-hot-toast';
import ContactsPage from 'pages/ContactPage';
import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './AppLayout/AppLayout';
import GlobalStyles from './GlobalStyles';
import RegistrationPage from 'pages/RegistrationPage';
import LogInPage from 'pages/LogInPage';
import { Suspense } from 'react';

const App = () => {
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
        }}
      />
    </>
  );
};

export default App;
