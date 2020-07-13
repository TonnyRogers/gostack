import { call, takeLatest, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';
import { getProjectsSuccess, createProjectSuccess } from './actions';

export function* getProjects() {
  try {
    const response = yield call(api.get, 'projects');

    console.tron.log(response);

    yield put(getProjectsSuccess(response.data));
  } catch (error) {
    Alert.alert('Erro', 'Falha ao carregar projetos.');
  }
}

export function* createProject({ payload }) {
  try {
    const { title } = payload;

    const response = yield call(api.post, 'projects', { title });

    if (!response.data) {
      Alert.alert('Erro', 'Erro ao criar projeto...');
      return;
    }

    yield put(createProjectSuccess(response.data));
  } catch (error) {
    Alert.alert('Erro', 'Erro ao criar projeto...');
  }
}

export default all([
  takeLatest('@projects/GET_PROJECTS_REQUEST', getProjects),
  takeLatest('@projects/CREATE_PROJECT_REQUEST', createProject),
]);
