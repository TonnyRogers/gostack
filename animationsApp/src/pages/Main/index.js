import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';

import {
  Container,
  NavigationButton,
  NavigationButtonText,
  Navigation,
} from './styles';

const Main = () => {
  const navigation = useNavigation();
  const pageButtons = [
    {
      name: 'Animation Types',
      sendNavigate: () => navigation.navigate('AnimationTypes'),
      background: null,
    },
    {
      name: 'Parallel Animation',
      sendNavigate: () => navigation.navigate('Parallel'),
      background: null,
    },
    {
      name: 'Sequential Animation',
      sendNavigate: () => navigation.navigate('Sequential'),
      background: null,
    },
    {
      name: 'Stagger Animation',
      sendNavigate: () => navigation.navigate('Stagger'),
      background: null,
    },
    {
      name: 'Loop Animation',
      sendNavigate: () => navigation.navigate('Loop'),
      background: null,
    },
    {
      name: 'Interpolate Animation',
      sendNavigate: () => navigation.navigate('Interpolate'),
      background: null,
    },
    {
      name: 'PanResponder Animation',
      sendNavigate: () => navigation.navigate('PanResponder'),
      background: null,
    },
    {
      name: 'Example1',
      sendNavigate: () => navigation.navigate('Example1'),
      background: '#4bbf8b',
    },
    {
      name: 'Example1',
      sendNavigate: () => navigation.navigate('Example1'),
      background: '#4bbf8b',
    },
  ];

  const columns = 2;

  function createRows(array, columnLength) {
    const rows = Math.floor(array.length / columnLength);
    let lastRowElement = array.length - rows * columnLength;

    while (lastRowElement !== columnLength) {
      array.push({
        name: `empty-${lastRowElement}`,
        sendNavigate: () => {},
        background: null,
        isEmpty: true,
      });

      lastRowElement++;
    }

    return array;
  }

  return (
    <Container>
      <Navigation
        data={createRows(pageButtons, columns)}
        keyExtractor={(item) => item.name}
        numColumns={columns}
        renderItem={({item}) => (
          <NavigationButton
            onPress={item.sendNavigate}
            bgColor={item.background}
            empty={item.isEmpty}>
            <NavigationButtonText empty={item.isEmpty}>
              {item.name}
            </NavigationButtonText>
          </NavigationButton>
        )}
      />
    </Container>
  );
};

export default Main;
