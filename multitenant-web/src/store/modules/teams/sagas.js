/* eslint-disable import/no-cycle */
/* eslint-disable require-yield */
import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
  getTeamsSuccess,
  getTeamsFailure,
  selectTeamFailure,
  selectTeamSuccess,
  createTeamSuccess,
  createTeamFailure,
  clearTeam,
} from './actions';
import api from '~/services/api';

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

  const { active: team } = payload.teams;

  localStorage.setItem('@Omni:team', JSON.stringify(team));

  // if (team) {
  //   api.defaults.headers.TEAM = team.slug;
  // }
}

export function* selectTeam({ payload }) {
  try {
    const { team } = payload;

    yield put(selectTeamSuccess(team));

    localStorage.setItem('@Omni:team', JSON.stringify(team));

    // api.defaults.headers.TEAM = team.slug;
  } catch (error) {
    yield put(selectTeamFailure());
  }
}

export function* createTeam({ payload }) {
  try {
    const { name } = payload;

    const response = yield call(api.post, 'teams', { name });

    if (!response.data) {
      toast.error('Erro! tente mais tarde.');
      return;
    }

    yield put(createTeamSuccess(response.data));

    toast.success(`Time "${name}" criado!`);
  } catch (error) {
    toast.error('Erro ao criar novo time, revise os dados.');
    yield put(createTeamFailure());
  }
}

export function* clearTeams() {
  yield put(clearTeam());
}

export default all([
  // takeLatest('persist/REHYDRATE', setTeam),
  takeLatest('@teams/GET_TEAM_REQUEST', getTeams),
  takeLatest('@teams/SELECT_TEAM_REQUEST', selectTeam),
  takeLatest('@teams/CREATE_TEAM_REQUEST', createTeam),
  takeLatest('@auth/SIGN_OUT', clearTeams),
]);
