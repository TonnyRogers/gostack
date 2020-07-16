import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, Animated, StyleSheet} from 'react-native';

const Interpolate = () => {
  const [ball1Y, setBall1Y] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(ball1Y, {}).reset();

    Animated.timing(ball1Y, {
      toValue: 500,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [ball1Y]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.ball,
            {
              top: ball1Y,
              opacity: ball1Y.interpolate({
                inputRange: [0, 300],
                outputRange: [1, 0.2],
                extrapolate: 'clamp', // useful to freeze  opacity even that value exceeds
              }),
            },
          ]}
        />
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

export default Interpolate;
