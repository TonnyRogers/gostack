import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Background from '../../../components/Background';
import { Container } from './styles';

const Confirm = ({ route }) => {
  const navigation = useNavigation();

  navigation.setOptions({
    title: 'Confirme Agendamento',
  });

  return (
    <Background>
      <Container>
        <Text>{route.params.provider.name}</Text>
        <Text>{route.params.time}</Text>
      </Container>
    </Background>
  );
};

export default Confirm;
