import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  NavigationContent,
  NavigationButton,
  NavigationButtonText,
} from './styles';

const Main = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <NavigationContent>
        <NavigationButton onPress={() => navigation.navigate('AnimationTypes')}>
          <NavigationButtonText>Animation Types</NavigationButtonText>
        </NavigationButton>
        <NavigationButton onPress={() => navigation.navigate('Parallel')}>
          <NavigationButtonText>Parallel Animation</NavigationButtonText>
        </NavigationButton>
        <NavigationButton onPress={() => navigation.navigate('Sequential')}>
          <NavigationButtonText>Sequential Animation</NavigationButtonText>
        </NavigationButton>
        <NavigationButton onPress={() => navigation.navigate('Stagger')}>
          <NavigationButtonText>Stagger Animation</NavigationButtonText>
        </NavigationButton>
      </NavigationContent>
    </Container>
  );
};

export default Main;
