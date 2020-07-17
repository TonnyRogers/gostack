import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Navigation = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  margin: 10px;
`;

export const NavigationButton = styled.TouchableOpacity`
  height: 120px;
  width: 120px;
  border-radius: 4px;
  background: ${(props) =>
    props.empty ? 'transparent' : props.bgColor || '#7159c1'};
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin: 4px;
  padding: 10px;
  flex-basis: 0;
`;

export const NavigationButtonText = styled.Text`
  color: ${(props) => (props.empty ? 'transparent' : '#FFF')};
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;
