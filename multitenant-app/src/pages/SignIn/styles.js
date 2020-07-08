import styled from 'styled-components/native';

export const Container = styled.View`
  background: #353940;
  height: 100%;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  margin: 0 auto;
  width: 300px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: 400;
  font-size: 28px;
  align-self: center;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  color: #fff;
  text-transform: uppercase;
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
