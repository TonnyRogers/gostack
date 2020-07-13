/* eslint-disable require-yield */
import { all, takeLatest, call, put, select, fork } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

// import history from '~/services/history';
import api from '../../../services/api';
import {
  signInSuccess,
  signFailure,
  signUpSuccess,
  getPermissionSuccess,
} from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { token } = response.data;

    if (!token) {
      Alert.alert('Erro', 'Email ou senha incorreto.');
      yield put(signFailure());
      return;
    }

    yield call([AsyncStorage, 'setItem'], '@Omni:token', token);
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token));

    // history.push('/');
  } catch (error) {
    Alert.alert('Erro', 'Erro ao efetuar login.');
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

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    const response = yield call(api.post, 'users', { name, email, password });

    const { token } = response.data;

    if (!token) {
      Alert.alert('Erro', 'Revise os dados.');
    }

    yield call([AsyncStorage, 'setItem'], '@Omni:token', token);

    yield put(signUpSuccess(response.data));

    api.defaults.headers.Authorization = `Bearer ${token}`;

    // history.push('/');
  } catch (error) {
    Alert.alert('Erro', 'Erro ao cadastrar, tente novamente.');
  }
}

export function* getPermissions() {
  const team = yield select((state) => state.teams.active);
  const signedIn = yield select((state) => state.auth.signed);

  if (!signedIn || !team) return;

  const response = yield call(api.get, 'permissions');

  const { role, permission } = response.data;

  yield put(getPermissionSuccess(role, permission));
}

export function* signOut() {
  yield call([AsyncStorage, 'clear']);
  // history.push('/signin');
}

export default all([
  // fork(getPermissions),
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@teams/SELECT_TEAM_SUCCESS', getPermissions),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
