import React, {useRef} from 'react';
import {
  View,
  SafeAreaView,
  Animated,
  StyleSheet,
  PanResponder,
} from 'react-native';

const PanResponders = () => {
  const ball = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        ball.setOffset({
          x: ball.x._value,
          y: ball.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: ball.x, dy: ball.y}], {
        useNativeDriver: false,
        listener: (e, gestureState) => {
          console.log(gestureState);
        },
      }),
      onPanResponderRelease: () => {
        ball.flattenOffset();
      },
    }),
  ).current;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            styles.ball,
            {
              transform: [{translateX: ball.x}, {translateY: ball.y}],
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

export default PanResponders;
