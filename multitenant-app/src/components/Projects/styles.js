import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ProjectList = styled.FlatList``;

export const PorjectContainer = styled.View`
  background: #292e36;
  margin: 10px 16px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #1d2127;
`;

export const ProjectTitle = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const NewProjectButton = styled.TouchableOpacity`
  align-self: flex-end;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #7159c1;
  align-items: center;
  justify-content: center;
  margin: 8px;
`;
