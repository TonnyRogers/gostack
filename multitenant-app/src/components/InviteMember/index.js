import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Label,
  Input,
  SubmitButton,
  SubmitButtonText,
  CancelButton,
  CancelButtonText,
} from './styles';
import Modal from '../Modal';
import { inviteMemberResquest } from '../../store/modules/members/actions';

const InviteMember = ({ visible, onRequestClose }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  function handleSubmit() {
    dispatch(inviteMemberResquest(email));
    onRequestClose();
    setEmail('');
  }

  return (
    <Modal visible={visible} onRequestClose={onRequestClose}>
      <Label>E-mail</Label>
      <Input
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
        underlineColorAndroid="transparent"
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
        value={email}
        onChangeText={setEmail}
      />

      <SubmitButton onPress={handleSubmit}>
        <SubmitButtonText>Convidar</SubmitButtonText>
      </SubmitButton>

      <CancelButton onPress={onRequestClose}>
        <CancelButtonText>Cancelar</CancelButtonText>
      </CancelButton>
    </Modal>
  );
};

InviteMember.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default InviteMember;
