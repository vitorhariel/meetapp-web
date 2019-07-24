import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { updateProfileSuccess } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload;

    const user = Object.assign({ name, email }, rest.oldPassword ? rest : {});

    const response = yield call(api.put, 'users', user);

    yield put(updateProfileSuccess(response.data));

    toast.success('Profile updated with success.');
  } catch (err) {
    if (err.response) {
      toast.error(err.response.data.error);
    } else {
      toast.error('Connection error.');
    }
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
