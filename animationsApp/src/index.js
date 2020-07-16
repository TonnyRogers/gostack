import React, {useEffect, useState, useRef} from 'react';
import {View, SafeAreaView, Animated, StyleSheet} from 'react-native';

const ballY = new Animated.Value(0);
const ballX = new Animated.divide(ballY, 2);

const App = () => {
  const [ball1Y, setBall1Y] = useState(ballY);
  const [ball1X, setBall1X] = useState(ballX);
  const [ball2Y, setBall2Y] = useState(new Animated.Value(0));
  const [ball3Y, setBall3Y] = useState(new Animated.Value(0));

  useEffect(() => {
    // Timing (linear)
    Animated.timing(ball1Y, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    // Spring (elastic)
    // Animated.spring(ball2Y, {
    //   toValue: 200,
    //   bounciness: 20,
    //   useNativeDriver: false,
    // }).start();

    // Decay
    // Animated.decay(ball3Y, {
    //   velocity: 0.4,
    //   useNativeDriver: false,
    // }).start();
  }, [ball1Y, ball2Y, ball3Y]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Animated.View style={[styles.ball, {top: ball1Y, left: ball1X}]} />
        {/* <Animated.View style={[styles.ball, {top: ball2Y}]} /> */}
        {/* <Animated.View style={[styles.ball, {top: ball3Y}]} /> */}
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
    flexDirection: 'row',
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#508',
    margin: 10,
  },
});

export default App;
