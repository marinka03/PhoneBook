import { Toaster } from 'react-hot-toast';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from '../redux/auth/auth-operations';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './AppLayout/AppLayout';
import GlobalStyles from './GlobalStyles';
import PriviteRoute from '../Routes/PriviteRoute';
import PublicRoute from '../Routes/PublicRoute';
import { selectRefresh } from '../redux/auth/auth-selectors';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LogInPage = lazy(() => import('pages/LogInPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectRefresh);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return !isRefresh && (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PriviteRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
                restricted
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<LogInPage />}
                restricted
              />
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
// {/* <Route path="/" element={<AppLayout />}>
//           <Route index element={<HomePage />} />
//           <Route path="/contacts" element={<ContactsPage />} />
//           <Route
//             path="/register"
//             element={
//               // <Suspense fallback={<p>Loading...</p>}>
//                 <RegistrationPage />
//               // </Suspense>
//             }
//           />
//           <Route
//             path="/login"
//             element={
//               // <Suspense fallback={<p>Loading...</p>}>
//                 <LogInPage />
//               // </Suspense>
//             }
//           />
//         </Route> */}
