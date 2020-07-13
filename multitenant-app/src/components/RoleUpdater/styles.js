import styled from 'styled-components/native';

export const Container = styled.View``;

export const RoleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 8px;
`;

export const RoleName = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;

export const RoleSwitch = styled.Switch``;

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
