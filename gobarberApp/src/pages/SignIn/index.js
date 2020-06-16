import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';
import Background from '../../components/Background';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn = () => {
  return (
    <Background>
      <Container>
        <Text>Login</Text>
        <Input
          icon="call"
          placeholder="Digite seu telefone"
          style={{ marginTop: 30 }}
        />
        <Button style={{ marginTop: 10 }}>Enviar</Button>
      </Container>
    </Background>
  );
};

export default SignIn;
