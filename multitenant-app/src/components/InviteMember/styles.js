import styled from 'styled-components/native';

export const Container = styled.View``;

export const Label = styled.Text`
  color: #fff;
`;

export const Input = styled.TextInput`
  height: 44px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: rgba(0, 0, 0, 0.1);
  color: #f6f6f6;
  border-radius: 4px;
  align-self: stretch;
  margin: 8px 0;
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 44px;
  background: #7289da;
  color: #f6f6f6;
  border-radius: 4px;
  align-self: stretch;
  margin: 8px 0;
  align-items: center;
  justify-content: center;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const CancelButton = styled.TouchableOpacity`
  height: 44px;
  background: transparent;
  color: #f6f6f6;
  border-radius: 4px;
  align-self: stretch;
  margin: 8px 0;
  align-items: center;
  justify-content: center;
`;

export const CancelButtonText = styled.Text`
  color: #777;
  font-weight: 300;
  font-size: 16px;
`;
