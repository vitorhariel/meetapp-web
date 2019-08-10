import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import jwt_decode from 'jwt-decode';
import history from '~/services/history';
import api from '~/services/api';

import {
  signInSuccess,
  signInFailure,
  tokenInvalid,
  signUpSuccess,
} from './actions';

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    toast.success('Registered with success.');
    history.push('/');
    yield put(signUpSuccess());
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.error);
    } else {
      toast.error('Connection error.');
    }

    yield put(signInFailure());
  }
}

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/');
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.error);
    } else {
      toast.error('Connection error.');
    }

    yield put(signInFailure());
  }
}

export function* setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  if (payload && payload.auth.token) {
    const decoded = jwt_decode(token);

    if (decoded.exp < Date.now() / 1000) {
      yield put(tokenInvalid());
    }
  }

  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
