import React, {useRef, useEffect} from 'react';
import {Animated, PanResponder, Dimensions, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {
  Container,
  UserContent,
  Background,
  UserData,
  UserInfo,
  Name,
  Role,
  LikeContent,
  LikeButton,
  Likes,
} from './styles';

const User = ({name, role, likes, url, press}) => {
  const offset = useRef(new Animated.ValueXY({x: 0, y: 150})).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const {width} = Dimensions.get('window');
  const image = {uri: url};

  const panResponder = useRef(
    PanResponder.create({
      onPanResponderTerminationRequest: () => false,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: offset.x}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, gestureState) => {
        if (offset.x._value < -200) {
          console.log(gestureState);
          Alert.alert('Deleted!');
        }

        Animated.spring(offset.x, {
          toValue: 0,
          bounciness: 10,
          useNativeDriver: false,
        }).start();
      },
      onPanResponderTerminate: () => {
        Animated.spring(offset.x, {
          toValue: 0,
          bounciness: 10,
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 5,
        bounciness: 20,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [
          ...offset.getTranslateTransform(),
          {
            rotateZ: offset.x.interpolate({
              inputRange: [width * -1, width],
              outputRange: ['-50deg', '50deg'],
            }),
          },
        ],
        opacity: opacity,
      }}
      {...panResponder.panHandlers}>
      <Container>
        <UserContent>
          <Background source={image} />
          <UserData onLongPress={press}>
            <UserInfo>
              <Name>{name}</Name>
              <Role>{role}</Role>
            </UserInfo>
            <LikeContent>
              <LikeButton>
                <Icon name="favorite" size={15} color="#FFF" />
                <Likes>{likes}</Likes>
              </LikeButton>
            </LikeContent>
          </UserData>
        </UserContent>
      </Container>
    </Animated.View>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  press: PropTypes.func,
};

User.defaultProps = {
  press: null,
};

export default User;
