import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Title,
  MemberList,
  MemberContainer,
  MemberName,
  MemberOptions,
  InviteButton,
  InviteButtonText,
} from './styles';
import { getMembersRequest } from '../../store/modules/members/actions';

const Members = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members);

  useEffect(() => {
    dispatch(getMembersRequest());
  }, [dispatch]);

  return (
    <Container>
      <Title>Membros</Title>

      <MemberList
        data={members.data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <MemberContainer>
            <MemberName>{item.user.name}</MemberName>

            <MemberOptions
              onPress={() => {}}
              hitSlop={{ top: 5, bottom: 5, right: 5, left: 5 }}
            >
              <Icon name="settings" size={24} color="#FFF" />
            </MemberOptions>
          </MemberContainer>
        )}
        ListFooterComponent={() => (
          <InviteButton onPress={() => {}}>
            <InviteButtonText> Convidar </InviteButtonText>
          </InviteButton>
        )}
      />
    </Container>
  );
};

export default Members;
