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

        <NavigationButton onPress={() => navigation.navigate('Loop')}>
          <NavigationButtonText>Loop Animation</NavigationButtonText>
        </NavigationButton>

        <NavigationButton onPress={() => navigation.navigate('Interpolate')}>
          <NavigationButtonText>Interpolate Animation</NavigationButtonText>
        </NavigationButton>

        <NavigationButton onPress={() => navigation.navigate('PanResponder')}>
          <NavigationButtonText>PanResponder</NavigationButtonText>
        </NavigationButton>

        <NavigationButton
          onPress={() => navigation.navigate('Example1')}
          style={{backgroundColor: '#129252'}}>
          <NavigationButtonText>Example 1</NavigationButtonText>
        </NavigationButton>
      </NavigationContent>
    </Container>
  );
};

export default Main;
