/* eslint-disable require-yield */
import { all, takeLatest, put, call } from 'redux-saga/effects';

import {
  getTeamsSuccess,
  getTeamsFailure,
  selectTeamFailure,
  selectTeamSuccess,
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

export function* selectTeam({ payload }) {
  try {
    const { team } = payload;

    yield put(selectTeamSuccess(team));
  } catch (error) {
    yield put(selectTeamFailure());
  }
}

export function* setTeam({ payload }) {
  if (!payload) return;

  const { active: team } = payload.teams;

  if (team) {
    api.defaults.headers.TEAM = team.slug;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setTeam),
  takeLatest('@teams/GET_TEAM_REQUEST', getTeams),
  takeLatest('@teams/SELECT_TEAM_REQUEST', selectTeam),
]);
