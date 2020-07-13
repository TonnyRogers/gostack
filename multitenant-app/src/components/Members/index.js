import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { getMembersRequest } from '../../store/modules/members/actions';
import { signOut } from '../../store/modules/auth/actions';
import InviteMember from '../InviteMember';
import RoleUpdater from '../RoleUpdater';
import Can from '../Can';
import {
  Container,
  Title,
  MemberList,
  MemberContainer,
  MemberName,
  MemberOptions,
  InviteButton,
  InviteButtonText,
  SignOutButton,
  SignOutButtonText,
} from './styles';

const Members = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members);
  const [isInviteModalOpen, setInviteModalOpen] = useState(false);
  const [isRoleModalOpen, setRoleModalOpen] = useState(false);
  const [memberEdit, setMemberEdit] = useState(null);

  useEffect(() => {
    dispatch(getMembersRequest());
  }, [dispatch]);

  function toggleInviteModalOpen() {
    setInviteModalOpen(true);
  }

  function toggleInviteModalClose() {
    setInviteModalOpen(false);
  }

  function toggleRoleModalOpen(member) {
    setRoleModalOpen(true);
    setMemberEdit(member);
  }

  function toggleRoleModalClose() {
    setRoleModalOpen(false);
    setMemberEdit(null);
  }

  return (
    <Container>
      <Title>Membros</Title>

      <MemberList
        data={members.data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <MemberContainer>
            <MemberName>{item.user.name}</MemberName>

            <Can checkRole="admin">
              <MemberOptions
                onPress={() => toggleRoleModalOpen(item)}
                hitSlop={{ top: 5, bottom: 5, right: 5, left: 5 }}
              >
                <Icon name="settings" size={24} color="#FFF" />
              </MemberOptions>
            </Can>
          </MemberContainer>
        )}
        ListFooterComponent={() => (
          <>
            <Can checkPermission="invites_create">
              <InviteButton onPress={toggleInviteModalOpen}>
                <InviteButtonText> Convidar </InviteButtonText>
              </InviteButton>
            </Can>
            <SignOutButton onPress={() => dispatch(signOut())}>
              <SignOutButtonText> Sair </SignOutButtonText>
            </SignOutButton>
          </>
        )}
      />

      <Can checkPermission="invites_create">
        <InviteMember
          visible={isInviteModalOpen}
          onRequestClose={toggleInviteModalClose}
        />
      </Can>

      {memberEdit && (
        <RoleUpdater
          visible={isRoleModalOpen}
          onRequestClose={toggleRoleModalClose}
          member={memberEdit}
        />
      )}
    </Container>
  );
};

export default Members;
