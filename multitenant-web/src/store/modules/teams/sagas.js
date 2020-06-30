import { all, takeLatest, put, call } from 'redux-saga/effects';

import { getTeamsSuccess, getTeamsFailure } from './actions';
import api from '~/services/api';

export function* getTeams() {
  try {
    const response = yield call(api.get, 'teams');

    yield put(getTeamsSuccess(response.data));
  } catch (error) {
    yield put(getTeamsFailure());
  }
}

export default all([takeLatest('@teams/GET_TEAM_REQUEST', getTeams)]);
