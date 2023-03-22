import { SignUpForm, Container } from 'components';
import React from 'react';

const Register = () => {
  return (
    <Container
      style={{
        flexDirection: 'column',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Sign up</h2>
      <SignUpForm />
    </Container>
  );
};
export default Register;
