import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  padding: 0 15px;
  background: #eee;
  border-radius: 4px;
  border: 1px solid #e9e9e9;
`;
export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  padding: 0 12px;
`;
export const SubmitButtonText = styled.Text``;
