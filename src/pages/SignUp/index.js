import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';

import history from '~/services/history';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Full name is a required field.'),
  email: Yup.string()
    .email()
    .required('E-mail is a required field.'),
  password: Yup.string()
    .min(6, 'Password must be longer than 6 characters.')
    .required('Password is a required field.'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(signUpRequest(data));
  }

  return (
    <>
      <img src={logo} alt="Meetapp" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <div className="group">
          <Input type="text" name="name" placeholder="Full name" />
          <div className="input-border" />
        </div>
        <div className="group">
          <Input type="email" name="email" placeholder="Your e-mail" />
          <div className="input-border" />
        </div>
        <div className="group">
          <Input type="password" name="password" placeholder="Your password" />
          <div className="input-border" />
        </div>
        <button type="submit">Register</button>
        <div className="footer">
          <span>Already have an account?</span>
          <button type="button" onClick={() => history.push('/')}>
            Sign In
          </button>
        </div>
      </Form>
    </>
  );
}
