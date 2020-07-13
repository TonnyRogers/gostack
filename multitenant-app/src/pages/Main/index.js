import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SideMenu from 'react-native-side-menu';

import { Container, Header, MenuButton, TeamButton, TeamTitle } from './styles';
import TeamSwitcher from '../../components/TeamSwitcher';
import Projects from '../../components/Projects';

const Main = () => {
  const navigation = useNavigation();
  const activeTeam = useSelector((state) => state.teams.active);
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  navigation.setOptions({
    title: 'Home',
  });

  function toggleMenu(position, isOpen) {
    switch (position) {
      case 'left':
        setLeftOpen(isOpen);
        break;
      case 'right':
        setRightOpen(isOpen);
        break;
      default:
        break;
    }
  }

  return (
    <SideMenu
      isOpen={leftOpen}
      disableGestures
      onChange={(isOpen) => toggleMenu('left', isOpen)}
      openMenuOffset={70}
      menu={<TeamSwitcher />}
    >
      <Container>
        <Header>
          <MenuButton
            onPress={() => toggleMenu('left', true)}
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

        <Projects />
      </Container>
    </SideMenu>
  );
};

export default Main;
