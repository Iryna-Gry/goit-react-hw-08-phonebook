import React, { useEffect, lazy } from 'react';
import { Wraper, RestrictedRoute, PrivateRoute, Loader } from 'components';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'pages';
import { fetchUser } from 'redux/user/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/user/slice';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <Wraper>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>

          <Route path="*" element={<HomePage />} />
        </Routes>
      )}
    </Wraper>
  );
};
