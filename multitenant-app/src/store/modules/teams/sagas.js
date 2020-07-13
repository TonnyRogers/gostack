/* eslint-disable require-yield */
import { all, takeLatest, put, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

import {
  getTeamsSuccess,
  getTeamsFailure,
  selectTeamFailure,
  selectTeamSuccess,
  createTeamSuccess,
  createTeamFailure,
  clearTeam,
} from './actions';
import api from '../../../services/api';

export function* getTeams() {
  try {
    const response = yield call(api.get, 'teams');

    yield put(getTeamsSuccess(response.data));
  } catch (error) {
    yield put(getTeamsFailure());
  }
}

export function* setTeam({ payload }) {
  if (!payload) return;

  // const { active: team } = payload.teams;

  // yield call([AsyncStorage, 'setItem'], '@Omni:team', team);
  // yield call([AsyncStorage, 'setItem'], '@Omni:team', JSON.stringify(team));

  const team = JSON.parse(yield call([AsyncStorage, 'getItem'], '@Omni:team'));

  console.tron.log('SETTEAM', team);

  if (team) {
    api.defaults.headers.TEAM = team.slug;
  }
}

export function* selectTeam({ payload }) {
  try {
    const { team } = payload;

    yield call([AsyncStorage, 'setItem'], '@Omni:team', JSON.stringify(team));

    api.defaults.headers.TEAM = team.slug;

    yield put(selectTeamSuccess(team));
  } catch (error) {
    Alert.alert('Erro', 'Falha ao selecionar time');
    yield put(selectTeamFailure());
  }
}

export function* createTeam({ payload }) {
  try {
    const { name } = payload;

    const response = yield call(api.post, 'teams', { name });

    if (!response.data) {
      Alert.alert('Erro', 'tente mais tarde.');
      return;
    }

    yield put(createTeamSuccess(response.data));
  } catch (error) {
    Alert.alert('Erro', 'Falha ao criar novo time, revise os dados.');
    yield put(createTeamFailure());
  }
}

export function* clearTeams() {
  yield put(clearTeam());
}

export default all([
  takeLatest('persist/REHYDRATE', setTeam),
  takeLatest('@teams/GET_TEAM_REQUEST', getTeams),
  takeLatest('@teams/SELECT_TEAM_REQUEST', selectTeam),
  takeLatest('@teams/CREATE_TEAM_REQUEST', createTeam),
  takeLatest('@auth/SIGN_OUT', clearTeams),
]);
