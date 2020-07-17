import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const PageHeader = styled(Animated.View)`
  background: #458;
  justify-content: flex-end;
`;

export const Title = styled(Animated.Text)`
  color: #fff;
  font-weight: bold;
  margin-bottom: 8px;
  margin-left: 8px;
`;

export const UserList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 8px 16px;
`;
