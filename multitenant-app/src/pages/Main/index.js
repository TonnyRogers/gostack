import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const Main = () => {
  const navigation = useNavigation();

  navigation.setOptions({
    title: 'Home',
  });

  return (
    <View style={{ backgroundColor: '#353940', height: '100%' }}>
      <Text
        style={{
          color: '#FFF',
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 20,
          fontSize: 20,
        }}
      >
        Dashboard
      </Text>
    </View>
  );
};

export default Main;
