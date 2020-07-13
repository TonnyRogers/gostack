/* eslint-disable import/no-cycle */
import { all, call, put, takeLatest } from 'redux-saga/effects';
import Toast from 'react-native-simple-toast';

import api from '../../../services/api';
import { getMembersSuccess, clearMembers, getMembersRequest } from './actions';

export function* getMembers() {
  try {
    const response = yield call(api.get, 'members');

    console.tron.log(response.data);

    yield put(getMembersSuccess(response.data));
  } catch (error) {
    Toast.show('Erro ao carregar membros.', 2000);
  }
}

export function* updateMember({ payload }) {
  const { memberId, roles } = payload;

  try {
    yield call(api.put, `members/${memberId}`, {
      roles: roles.map((role) => role.id),
    });

    Toast.show('Membro atualizado!', 2000);
  } catch (error) {
    Toast.show('Erro ao atualizar membro.', 2000);
  }
}

export function* inviteMember({ payload }) {
  try {
    const { email } = payload;

    yield call(api.post, 'invites', { invites: [email] });

    Toast.show('Convite enviado!', 2000);

    yield put(getMembersRequest());
  } catch (error) {
    Toast.show('Erro ao enviar convite', 2000);
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
