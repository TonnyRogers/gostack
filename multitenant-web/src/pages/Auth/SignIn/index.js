import React from 'react';

import Buttom from '~/styles/components/Button';
import { Container, SignForm } from '../styles';

function SignIn() {
  return (
    <Container>
      <SignForm onSubmit={() => {}}>
        <h1>Boas vindas</h1>

        <span>E-MAIL</span>
        <input type="eamil" name="email" />

        <span>SENHA</span>
        <input type="password" name="password" />

        <Buttom size="big" type="submit">
          Entrar
        </Buttom>
      </SignForm>
    </Container>
  );
}

export default SignIn;
