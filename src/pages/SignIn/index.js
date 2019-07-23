import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Content>
        <form action="">
          <input type="email" name="email" placeholder="Your email" />
          <input type="password" name="password" placeholder="Your password" />
          <button type="submit">Sign In</button>
          <Link to="/register">Don&apos;t have an account?</Link>
        </form>
      </Content>
    </Container>
  );
}
