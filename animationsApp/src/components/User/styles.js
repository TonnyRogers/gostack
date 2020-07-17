import styled from 'styled-components/native';

export const Container = styled.View``;

export const UserContent = styled.View`
  background: #4828;
  height: 200px;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  border-radius: 4px;
`;

export const UserData = styled.View`
  background: #999;
  padding: 8px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const UserInfo = styled.View``;

export const Name = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
`;

export const Role = styled.Text`
  color: #f1f1f1;
  font-weight: 300;
  font-size: 12px;
`;

export const LikeContent = styled.View``;

export const LikeButton = styled.TouchableOpacity`
  flex-direction: row;
  height: 25px;
  width: 70px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  margin: 8px;
`;

export const Likes = styled.Text`
  color: #f1f1f1;
  font-weight: 300;
  font-size: 14px;
`;
