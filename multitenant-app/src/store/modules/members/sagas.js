/* eslint-disable import/no-cycle */
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { getMembersSuccess, clearMembers, getMembersRequest } from './actions';

export function* getMembers() {
  try {
    const response = yield call(api.get, 'members');

    yield put(getMembersSuccess(response.data));
  } catch (error) {
    // toast.error('Erro ao carregar membros.');
  }
}

export function* updateMember({ payload }) {
  const { memberId, roles } = payload;

  try {
    yield call(api.put, `members/${memberId}`, {
      roles: roles.map((role) => role.id),
    });

    // toast.success('Membro atualizado!');
  } catch (error) {
    // toast.error('Erro ao atualizar membro.');
  }
}

export function* inviteMember({ payload }) {
  try {
    const { email } = payload;

    yield call(api.post, 'invites', { invites: [email] });

    // toast.success('Convite enviado!');

    yield put(getMembersRequest());
  } catch (error) {
    // toast.error('Erro ao enviar convite.');
  }
}

export function* cleanMembers() {
  yield put(clearMembers());
}

export default all([
  takeLatest('@members/GET_MEMBERS_REQUEST', getMembers),
  takeLatest('@members/UPDATE_MEMBERS_REQUEST', updateMember),
  takeLatest('@members/INVITE_MEMBER_REQUEST', inviteMember),
  takeLatest('@auth/SIGN_OUT', cleanMembers),
]);
