import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background: #1d2127;
  flex: 1;
  padding: 10px;
`;

export const TeamButton = styled.TouchableOpacity`
  background: transparent;
  margin: 0 0 8px;
  align-items: center;
  justify-content: center;
`;

export const TeamAvatar = styled.Image`
  border-radius: 25px;
  width: 50px;
  height: 50px;
`;

export const NewTeamButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px dashed rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.3);
  margin: 0 0 20px;
  background: transparent;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;
