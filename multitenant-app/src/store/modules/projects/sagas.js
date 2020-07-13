import { call, takeLatest, put, all } from 'redux-saga/effects';
import Toast from 'react-native-simple-toast';

import api from '../../../services/api';
import { getProjectsSuccess, createProjectSuccess } from './actions';

export function* getProjects() {
  try {
    const response = yield call(api.get, 'projects');

    console.tron.log(response.data);

    yield put(getProjectsSuccess(response.data));
  } catch (error) {
    Toast.show('Falha ao carregar projetos.', 2000);
  }
}

export function* createProject({ payload }) {
  try {
    const { title } = payload;

    const response = yield call(api.post, 'projects', { title });

    if (!response.data) {
      Toast.show('Erro ao criar projeto...', 2000);
      return;
    }

    yield put(createProjectSuccess(response.data));
    Toast.show('Projeto cadastrado!', 2000);
  } catch (error) {
    Toast.show('Erro ao criar projeto...', 2000);
  }
}

export default all([
  takeLatest('@projects/GET_PROJECTS_REQUEST', getProjects),
  takeLatest('@projects/CREATE_PROJECT_REQUEST', createProject),
]);
