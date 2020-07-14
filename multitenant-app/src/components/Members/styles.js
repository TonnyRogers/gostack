import styled from 'styled-components/native';

export const Container = styled.View`
  background: #1d2127;
  flex: 1;
  padding: 10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const MemberList = styled.FlatList`
  margin-top: 10px;
`;

export const MemberContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MemberName = styled.Text`
  color: #fff;
  font-weight: 300;
  margin-left: 8px;
`;

export const MemberOptions = styled.TouchableOpacity`
  margin-right: 8px;
`;

export const InviteButton = styled.TouchableOpacity`
  background: #7159c1;
  height: 40px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin: 8px;
`;

export const InviteButtonText = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 16px;
`;

export const SignOutButton = styled.TouchableOpacity`
  background: transparent;
  height: 40px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin: 8px;
  flex-direction: row;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 16px;
`;
