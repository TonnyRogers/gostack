import React from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7159c1',
    paddingTop: 16,
    height: '100%',
    width: '100%',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Welcome to React</Text>
      </SafeAreaView>
    </>
  );
}
