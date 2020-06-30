/* eslint-disable require-yield */
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });

    console.tron.log(response);

    const { token } = response.data;

    if (!token) {
      toast.warning('Email ou senha incorreto.');
      yield put(signFailure());
      return;
    }

    // localStorage.setItem('@Omni:token', token);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token));

    history.push('/');
  } catch (error) {
    toast.error('Erro ao efetuar login.');
    yield put(signFailure());
  }
}

export function* setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/signin');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
