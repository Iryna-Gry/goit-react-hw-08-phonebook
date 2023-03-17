import React from 'react';
import { LoginForm, Container } from 'components';

export const Login = () => {
  return (
    <Container style={{ flexDirection: 'column', maxWidth: '600px' }}>
      <h2 style={{ textAlign: 'center' }}>Log in</h2>
      <LoginForm />
    </Container>
  );
};
