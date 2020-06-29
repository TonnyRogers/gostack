/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import Buttom from '~/styles/components/Button';
import { Container, SignForm } from '../styles';

function SignIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <SignForm onSubmit={(e) => handleSubmit(e)}>
        <h1>Boas vindas</h1>

        <span>E-MAIL</span>
        <input
          type="eamil"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <span>SENHA</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Buttom size="big" type="submit">
          Entrar
        </Buttom>
      </SignForm>
    </Container>
  );
}

export default SignIn;
