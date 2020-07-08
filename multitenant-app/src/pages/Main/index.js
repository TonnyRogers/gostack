import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const Main = () => {
  const navigation = useNavigation();

  navigation.setOptions({
    title: 'Home',
  });

  return (
    <View>
      <Text>Hello</Text>
      <Button onPress={() => navigation.navigate('SigIn')} title="Login">
        Login
      </Button>
    </View>
  );
};

export default Main;
