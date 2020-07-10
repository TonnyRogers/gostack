import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { Container, Header, MenuButton, TeamButton, TeamTitle } from './styles';

const Main = () => {
  const navigation = useNavigation();
  const activeTeam = useSelector((state) => state.teams.active);

  navigation.setOptions({
    title: 'Home',
  });

  return (
    <Container>
      <Header>
        <MenuButton
          onPress={() => {}}
          hitSlop={{ top: 5, bottom: 5, left: 10, right: 10 }}
        >
          <Icon name="menu" size={24} color="#FFF" />
        </MenuButton>
        <TeamTitle>
          {activeTeam ? activeTeam.name : 'Selecione o time'}
        </TeamTitle>
        <TeamButton
          onPress={() => {}}
          hitSlop={{ top: 5, bottom: 5, left: 10, right: 10 }}
        >
          <Icon name="group" size={24} color="#FFF" />
        </TeamButton>
      </Header>
    </Container>
  );
};

export default Main;
