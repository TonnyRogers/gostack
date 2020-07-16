import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Animated, StyleSheet} from 'react-native';

const App = () => {
  const [ballY, setBallY] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(ballY, {
      toValue: 500,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [ballY]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Animated.View style={[styles.ball, {top: ballY}]} />
      </View>
    </SafeAreaView>
  );
};

/**
 * Animated.View
 * Animated.Text
 * Animated.Image
 * Animated.ScrollView
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#508',
  },
});

export default App;
