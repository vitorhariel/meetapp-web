import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

export default function SignUp() {
  return (
    <Container>
      <Content>
        <form action="">
          <input type="text" name="name" placeholder="Your full name" />
          <input type="email" name="email" placeholder="Your email" />
          <input type="password" name="password" placeholder="Your password" />
          <button type="submit">Register</button>
          <Link to="/">Already have an account?</Link>
        </form>
      </Content>
    </Container>
  );
}
