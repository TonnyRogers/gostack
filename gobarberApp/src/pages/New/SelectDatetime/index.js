import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';
import Background from '../../../components/Background';
import DateInput from '../../../components/DateInput';

export default function SelectDatetime() {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
}
