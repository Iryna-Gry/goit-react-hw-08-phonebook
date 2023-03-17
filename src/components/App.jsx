import React, { useEffect } from 'react';
import { Wraper } from 'components';
import { Route, Routes } from 'react-router-dom';
import { Home, SharedLayout, Contacts, Register, Login } from 'pages';
import { fetchUser } from 'redux/user/operations';
import { useDispatch } from 'react-redux';
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <Wraper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </Wraper>
  );
};
