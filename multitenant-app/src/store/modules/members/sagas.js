/* eslint-disable import/no-cycle */
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';
import { getMembersSuccess, clearMembers, getMembersRequest } from './actions';

export function* getMembers() {
  try {
    const response = yield call(api.get, 'members');

    console.tron.log(response.data);

    yield put(getMembersSuccess(response.data));
  } catch (error) {
    Alert.alert('Erro', 'Erro ao carregar membros.');
  }
}

export function* updateMember({ payload }) {
  const { memberId, roles } = payload;

  try {
    yield call(api.put, `members/${memberId}`, {
      roles: roles.map((role) => role.id),
    });

    Alert.alert('Sucesso', 'Membro atualizado!');
  } catch (error) {
    Alert.alert('Erro', 'Erro ao atualizar membro.');
  }
}

export function* inviteMember({ payload }) {
  try {
    const { email } = payload;

    yield call(api.post, 'invites', { invites: [email] });

    Alert.alert('Sucesso', 'Convite enviado!');

    yield put(getMembersRequest());
  } catch (error) {
    Alert.alert('Erro', 'Erro ao enviar convite.');
  }
}

export function* cleanMembers() {
  yield put(clearMembers());
}

export default all([
  takeLatest('@teams/SELECT_TEAM_SUCCESS', getMembers),
  takeLatest('@members/GET_MEMBERS_REQUEST', getMembers),
  takeLatest('@members/UPDATE_MEMBERS_REQUEST', updateMember),
  takeLatest('@members/INVITE_MEMBER_REQUEST', inviteMember),
  takeLatest('@auth/SIGN_OUT', cleanMembers),
]);
