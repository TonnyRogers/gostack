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
import { createProjectRequest } from '../../store/modules/projects/actions';

import Modal from '../Modal';

const NewProject = ({ visible, onRequestClose }) => {
  const dispatch = useDispatch();
  const [newProject, setNewProject] = useState('');

  function handleSubmit() {
    dispatch(createProjectRequest(newProject));
    onRequestClose();
    setNewProject('');
  }

  return (
    <Modal visible={visible} onRequestClose={onRequestClose}>
      <Label>Titulo</Label>
      <Input
        underlineColorAndroid="transparent"
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
        value={newProject}
        onChangeText={setNewProject}
      />

      <SubmitButton onPress={handleSubmit}>
        <SubmitButtonText>Criar Projeto</SubmitButtonText>
      </SubmitButton>

      <CancelButton onPress={onRequestClose}>
        <CancelButtonText>Cancelar</CancelButtonText>
      </CancelButton>
    </Modal>
  );
};

NewProject.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default NewProject;
