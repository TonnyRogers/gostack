import React, {useRef, useState, useEffect} from 'react';
import {Animated, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  PageHeader,
  UserList,
  Title,
  HeaderBackground,
  UserTitle,
} from './styles';
import User from '../../components/User';

const {width} = Dimensions.get('window');

const users = [
  {
    name: 'Tony Amaral',
    role: 'Head Developer',
    likes: 20,
    url: 'https://reactjs.org/logo-og.png',
  },
  {
    name: 'Douglas Souza',
    role: 'Front-end Developer',
    likes: 80,
    url: 'https://www.igti.com.br/wp-content/uploads/2019/08/desfrontend.png',
  },
  {
    name: 'Lucas Silva',
    role: 'System Analyst',
    likes: 35,
    url:
      'https://tr3.cbsistatic.com/hub/i/r/2018/11/08/24625137-0593-455b-bdb7-9b2395d3aeb0/resize/1200x/9e01b4a0971ce4b215f310311058e065/metamorworksistock-952679588.jpg',
  },
];

const Example1 = () => {
  const scrollOffset = useRef(new Animated.Value(0)).current;
  const listProgress = useRef(new Animated.Value(0)).current;
  const userInfoProgress = useRef(new Animated.Value(0)).current;
  const [userSelected, setUserSelected] = useState({});
  const [userInfoVisible, setUserInfoVisible] = useState(false);

  useEffect(() => {
    Animated.timing(userInfoProgress, {
      toValue: 50,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, []);

  function selectUser(user) {
    setUserSelected(user);
    Animated.sequence([
      Animated.timing(listProgress, {
        toValue: 100,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(userInfoProgress, {
        toValue: 100,
        duration: 400,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setUserInfoVisible(true);
    });
  }

  return (
    <Container>
      <PageHeader
        style={[
          {
            height: scrollOffset.interpolate({
              inputRange: [0, 140],
              outputRange: [200, 70],
              extrapolate: 'clamp',
            }),
            opacity: !userSelected.name
              ? 1
              : userInfoProgress.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, 1],
                }),
          },
        ]}>
        <HeaderBackground source={{uri: userSelected.url}}>
          <Title
            style={[
              {
                fontSize: scrollOffset.interpolate({
                  inputRange: [120, 140],
                  outputRange: [24, 16],
                  extrapolate: 'clamp',
                }),
                transform: [
                  {
                    translateX: !userSelected.name
                      ? userInfoProgress.interpolate({
                          inputRange: [0, 50],
                          outputRange: [width * -1, 0],
                        })
                      : userInfoProgress.interpolate({
                          inputRange: [50, 100],
                          outputRange: [width, 0],
                        }),
                  },
                ],
              },
            ]}>
            {userSelected.name || 'GoNative'}
          </Title>
        </HeaderBackground>
      </PageHeader>
      {userInfoVisible ? (
        <View style={{margin: 10}}>
          <User
            name={userSelected.name}
            role={userSelected.role}
            likes={userSelected.likes}
            url={userSelected.url}
          />
        </View>
      ) : (
        <Animated.View
          style={[
            {
              transform: [
                {
                  translateX: listProgress.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, width],
                  }),
                },
              ],
              flex: 1,
            },
          ]}>
          <UserList
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {y: scrollOffset},
                  },
                },
              ],
              {useNativeDriver: false},
            )}>
            {users.map((user) => (
              <User
                key={user.name}
                name={user.name}
                role={user.role}
                likes={user.likes}
                url={user.url}
                press={() => selectUser(user)}
              />
            ))}
          </UserList>
        </Animated.View>
      )}
    </Container>
  );
};

export default Example1;
