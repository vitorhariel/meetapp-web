import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/M.svg';

import { Container, Content } from './styles';

export default function SignIn() {
  const schema = Yup.object().shape({
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
        <img src={logo} alt="Meetapp" />
        <Form onSubmit={handleSubmit} schema={schema}>
          <Input type="email" name="email" placeholder="Your e-mail" />
          <Input type="password" name="password" placeholder="Your password" />
          <button type="submit">Sign In</button>
          <Link to="/register">Don&apos;t have an account?</Link>
        </Form>
      </Content>
    </Container>
  );
}
