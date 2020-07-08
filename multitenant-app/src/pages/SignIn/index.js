import React, { useState, useRef } from 'react';
import { KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Form,
  Title,
  Label,
  Input,
  SubmitButton,
  SubmitButtonText,
} from './styles';

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef();

  navigation.setOptions({
    title: 'Login',
  });

  function handleSubmit() {
    // ACTION()
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <Container>
        <Form>
          <Title>Login</Title>

          <Label>E-mail</Label>
          <Input
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus
            underlineColorAndroid="transparent"
            returKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <Label>Senha</Label>
          <Input
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            returKeyType="send"
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton
            onPress={() => Alert.alert('message', `${email} e ${password}`)}
          >
            <SubmitButtonText>Logar</SubmitButtonText>
          </SubmitButton>
        </Form>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
