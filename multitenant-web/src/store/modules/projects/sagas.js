import { call, takeLatest, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { getProjectsSuccess } from './actions';

export function* getProjects() {
  try {
    const response = yield call(api.get, 'projects');

    console.tron.log(response);

    yield put(getProjectsSuccess(response.data));
  } catch (error) {
    toast.error('Falha ao carregar projetos.');
  }
}

export default all([takeLatest('@projects/GET_PROJECTS_REQUEST', getProjects)]);
