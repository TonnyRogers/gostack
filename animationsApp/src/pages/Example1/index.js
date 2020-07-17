import React from 'react';
import {Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  PageHeader,
  UserList,
  UserContent,
  UserData,
  UserInfo,
  Name,
  Role,
  LikeContent,
  LikeButton,
  Likes,
  Title,
  Background,
} from './styles';
const image = {uri: 'https://reactjs.org/logo-og.png'};

const Example1 = () => {
  return (
    <Container>
      <PageHeader>
        <Title>GoNative</Title>
      </PageHeader>
      <UserList>
        <UserContent>
          <Background source={image} />
          <UserData>
            <UserInfo>
              <Name>Tony Amaral</Name>
              <Role>Head Developer</Role>
            </UserInfo>
            <LikeContent>
              <LikeButton>
                <Icon name="favorite" size={15} color="#FFF" />
                <Likes>200</Likes>
              </LikeButton>
            </LikeContent>
          </UserData>
        </UserContent>

        <UserContent>
          <Background source={image} />
          <UserData>
            <UserInfo>
              <Name>Tony Amaral</Name>
              <Role>Head Developer</Role>
            </UserInfo>
            <LikeContent>
              <LikeButton>
                <Icon name="favorite" size={15} color="#FFF" />
                <Likes>200</Likes>
              </LikeButton>
            </LikeContent>
          </UserData>
        </UserContent>

        <UserContent>
          <Background source={image} />
          <UserData>
            <UserInfo>
              <Name>Tony Amaral</Name>
              <Role>Head Developer</Role>
            </UserInfo>
            <LikeContent>
              <LikeButton>
                <Icon name="favorite" size={15} color="#FFF" />
                <Likes>200</Likes>
              </LikeButton>
            </LikeContent>
          </UserData>
        </UserContent>

        <UserContent>
          <Background source={image} />
          <UserData>
            <UserInfo>
              <Name>Tony Amaral</Name>
              <Role>Head Developer</Role>
            </UserInfo>
            <LikeContent>
              <LikeButton>
                <Icon name="favorite" size={15} color="#FFF" />
                <Likes>200</Likes>
              </LikeButton>
            </LikeContent>
          </UserData>
        </UserContent>
      </UserList>
    </Container>
  );
};

export default Example1;
