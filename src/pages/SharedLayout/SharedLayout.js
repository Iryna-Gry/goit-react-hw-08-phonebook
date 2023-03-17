import { Container, Logo, Navigation, UserMenu, AuthNav } from 'components';
import css from './SharedLayout.module.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/user/slice';
import { useSelector } from 'react-redux';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header className={css.Header}>
        <Container>
          <div className={css.Header__menu}>
            <Logo />
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </div>
        </Container>
      </header>
      <Outlet />
    </>
  );
};
