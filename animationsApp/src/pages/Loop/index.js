import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Animated, StyleSheet} from 'react-native';

const Loop = () => {
  const [ball1Y, setBall1Y] = useState(new Animated.Value(0));
  const [ball1X, setBall1X] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(ball1Y, {
          toValue: 200,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.delay(100),
        Animated.timing(ball1X, {
          toValue: 200,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.delay(100),
        Animated.timing(ball1Y, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.delay(100),
        Animated.timing(ball1X, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.delay(100),
      ]),
      {
        iterations: 3,
      },
    ).start();
  }, [ball1Y, ball1X]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Animated.View style={[styles.ball, {top: ball1Y, left: ball1X}]} />
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

export default Loop;
