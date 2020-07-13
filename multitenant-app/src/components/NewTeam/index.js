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
import { createTeamRequest } from '../../store/modules/teams/actions';

import Modal from '../Modal';

const NewTeam = ({ visible, onRequestClose }) => {
  const dispatch = useDispatch();
  const [newTeam, setNewTeam] = useState('');

  function handleSubmit() {
    dispatch(createTeamRequest(newTeam));
    onRequestClose();
    setNewTeam('');
  }

  return (
    <Modal visible={visible} onRequestClose={onRequestClose}>
      <Label>Nome</Label>
      <Input
        underlineColorAndroid="transparent"
        returnKeyType="send"
        onSubmitEditing={() => handleSubmit()}
        value={newTeam}
        onChangeText={setNewTeam}
      />

      <SubmitButton onPress={() => handleSubmit()}>
        <SubmitButtonText>Criar Time</SubmitButtonText>
      </SubmitButton>

      <CancelButton onPress={() => onRequestClose()}>
        <CancelButtonText>Cancelar</CancelButtonText>
      </CancelButton>
    </Modal>
  );
};

NewTeam.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default NewTeam;
