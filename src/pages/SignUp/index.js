import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, Content } from './styles';

export default function SignUp() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Full name is a required field.'),
    email: Yup.string()
      .email()
      .required('E-mail is a required field.'),
    password: Yup.string().required('Password is a required field.'),
  });

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit} schema={schema}>
          <Input type="text" name="name" placeholder="Full name" />
          <Input type="email" name="email" placeholder="Your e-mail" />
          <Input type="password" name="password" placeholder="Your password" />
          <button type="submit">Register</button>
          <Link to="/">Already have an account?</Link>
        </Form>
      </Content>
    </Container>
  );
}
