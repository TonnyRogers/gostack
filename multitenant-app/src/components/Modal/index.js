import React from 'react';
import { Platform } from 'react-native';

import { Content, RNModal, KeyboardAvoidingView } from './styles';

const Modal = ({ visible, children, onRequestClose }) => {
  return (
    <RNModal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onRequestClose}
    >
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <Content>{children}</Content>
      </KeyboardAvoidingView>
    </RNModal>
  );
};

export default Modal;
