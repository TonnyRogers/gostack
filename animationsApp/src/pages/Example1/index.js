import React from 'react';
import {Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, PageHeader, UserList, Title} from './styles';
import User from '../../components/User';

const Example1 = () => {
  return (
    <Container>
      <PageHeader>
        <Title>GoNative</Title>
      </PageHeader>
      <UserList>
        <User
          name="Tony Amaral"
          role="Head Developer"
          likes={20}
          url="https://reactjs.org/logo-og.png"
        />
        <User
          name="Douglas Souza"
          role="Front-end Developer"
          likes={80}
          url="https://www.igti.com.br/wp-content/uploads/2019/08/desfrontend.png"
        />
        <User
          name="Lucas Silva"
          role="System Analyst"
          likes={35}
          url="https://tr3.cbsistatic.com/hub/i/r/2018/11/08/24625137-0593-455b-bdb7-9b2395d3aeb0/resize/1200x/9e01b4a0971ce4b215f310311058e065/metamorworksistock-952679588.jpg"
        />
      </UserList>
    </Container>
  );
};

export default Example1;
