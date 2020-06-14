import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';
import AvatarInput from './AvatarInput';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);

  const dispatch = useDispatch();

  function handleData(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleData}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <hr />
        <Input name="oldPassword" type="password" placeholder="Senha autal" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />
        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button">Sair</button>
    </Container>
  );
}
