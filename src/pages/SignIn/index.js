import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';

import history from '~/services/history';

import { signInRequest } from '~/store/modules/auth/actions';

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
        <div className="group">
          <Input type="email" name="email" placeholder="Your e-mail" />
          <div className="input-border" />
        </div>
        <div className="group">
          <Input type="password" name="password" placeholder="Your password" />
          <div className="input-border" />
        </div>
        <button type="submit">{loading ? 'Loading...' : 'Sign In'}</button>
        <div className="footer">
          <span>Don&apos;t have an account?</span>
          <button type="button" onClick={() => history.push('/register')}>
            Create
          </button>
        </div>
      </Form>
    </>
  );
}
