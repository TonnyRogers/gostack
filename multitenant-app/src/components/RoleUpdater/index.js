import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import api from '../../services/api';
import {
  Container,
  RoleContainer,
  RoleName,
  RoleSwitch,
  CancelButton,
  CancelButtonText,
} from './styles';
import { updateMembersRequest } from '../../store/modules/members/actions';
import Modal from '../Modal';

const RoleUpdater = ({ visible, onRequestClose, member }) => {
  const dispatch = useDispatch();
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    async function getRoles() {
      const response = await api.get('roles');

      if (response.data) {
        setRoles(response.data);
      }
    }

    getRoles();
  }, []);

  function handleRoleChange(value, role) {
    const requestRoles = value
      ? [...member.roles, role]
      : member.roles.filter((memberRole) => memberRole.id !== role.id);

    dispatch(updateMembersRequest(member.id, requestRoles));
    onRequestClose();
  }

  return (
    <Modal visible={visible} onRequestClose={onRequestClose}>
      <Container>
        {roles.map((role) => (
          <RoleContainer key={role.id}>
            <RoleName>{role.name}</RoleName>
            <RoleSwitch
              value={
                !!member.roles.find((memberRole) => memberRole.id === role.id)
              }
              onValueChange={(value) => handleRoleChange(value, role)}
            />
          </RoleContainer>
        ))}
      </Container>
      <CancelButton onPress={onRequestClose}>
        <CancelButtonText>Voltar</CancelButtonText>
      </CancelButton>
    </Modal>
  );
};

RoleUpdater.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  member: PropTypes.shape().isRequired,
};

export default RoleUpdater;
