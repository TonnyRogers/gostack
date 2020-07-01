import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { getMembersSuccess } from './actions';

export function* getMembers() {
  try {
    const response = yield call(api.get, 'members');

    yield put(getMembersSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao carregar membros.');
  }
}

export default all([takeLatest('@members/GET_MEMBERS_REQUEST', getMembers)]);
