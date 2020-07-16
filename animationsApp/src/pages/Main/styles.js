import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const NavigationContent = styled.ScrollView`
  margin: 10px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.1);
  flex: 1;
  border-radius: 4px;
`;

export const NavigationButton = styled.TouchableOpacity`
  height: 60px;
  border-radius: 4px;
  background: #7159c1;
  align-items: center;
  justify-content: center;
  margin: 8px 0;
`;

export const NavigationButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
