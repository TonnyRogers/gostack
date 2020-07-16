import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Animated, StyleSheet} from 'react-native';

const Stagger = () => {
  const [ball1Y, setBall1Y] = useState(new Animated.Value(0));
  const [ball1X, setBall1X] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.stagger(300, [
      Animated.timing(ball1Y, {
        toValue: 200,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.delay(1000),
      Animated.spring(ball1X, {
        toValue: 200,
        bounciness: 20,
        useNativeDriver: false,
      }),
    ]).start();
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

export default Stagger;
