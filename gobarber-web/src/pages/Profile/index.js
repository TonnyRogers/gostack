import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);

  function handleData(data) {}

  const schema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    password: Yup.string().min(6, 'A senha deve conter ao menos 6 caracteres'),
  });

  return (
    <Container>
      <Form initialData={profile} schema={schema} onSubmit={handleData}>
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
