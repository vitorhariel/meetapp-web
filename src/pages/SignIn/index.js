import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/M.svg';

import { signInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('E-mail is a required field.'),
  password: Yup.string().required('Password is a required field.'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(data) {
    dispatch(signInRequest(data));
  }

  return (
    <>
      <img src={logo} alt="Meetapp" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input type="email" name="email" placeholder="Your e-mail" />
        <Input type="password" name="password" placeholder="Your password" />
        <button type="submit">{loading ? 'Loading...' : 'Sign In'}</button>
        <Link to="/register">Don&apos;t have an account?</Link>
      </Form>
    </>
  );
}
