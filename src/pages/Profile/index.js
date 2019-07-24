import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';

import { updateProfileRequest } from '../../store/modules/user/actions';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is a required field.'),
  email: Yup.string()
    .email()
    .required('Email is a required field.'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, schema) => {
    return oldPassword
      ? schema
          .min(6, 'Password must be longer than 6 characters.')
          .required('You must specify a new password.')
      : schema;
  }),
  confirmedPassword: Yup.string().when('oldPassword', (oldPassword, schema) => {
    return oldPassword
      ? schema
          .min(6, 'Confirm password must be longer than 6 characters.')
          .oneOf([Yup.ref('password')], 'Passwords does not match.')
          .required('You must confirm your new password.')
      : schema;
  }),
});

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
        schema={validationSchema}
        initialData={user}
      >
        <Input type="text" name="name" placeholder="Full name" />
        <Input type="email" name="email" placeholder="E-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Current password"
        />
        <Input type="password" name="password" placeholder="New password" />
        <Input
          type="password"
          name="confirmedPassword"
          placeholder="Confirm new password"
        />

        <button type="submit">
          <MdAddCircleOutline size={24} /> Save profile
        </button>
      </Form>
    </Container>
  );
}
