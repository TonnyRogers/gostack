/* eslint-disable require-yield */
import { all, takeLatest, put, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';

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
    Toast.show('Erro ao buscar times', 2000);
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
    Toast.show('Falha ao selecionar time', 2000);
    yield put(selectTeamFailure());
  }
}

export function* createTeam({ payload }) {
  try {
    const { name } = payload;

    const response = yield call(api.post, 'teams', { name });

    if (!response.data) {
      Toast.show('Erro tente mais tarde.', 2000);

      return;
    }

    yield put(createTeamSuccess(response.data));
  } catch (error) {
    Toast.show('Falha ao criar novo time, revise os dados.', 2000);
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
