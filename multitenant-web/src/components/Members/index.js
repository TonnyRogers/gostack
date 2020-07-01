import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../Modal';
import { MembersList } from './styles';
import Button from '~/styles/components/Button';

import {
  closeMembersModal,
  getMembersRequest,
} from '~/store/modules/members/actions';

const Members = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members);

  useEffect(() => {
    dispatch(getMembersRequest());
  }, [dispatch]);

  return (
    <Modal>
      <h1>Membros</h1>

      <form>
        <MembersList>
          {members.data ? (
            members.data.map((member) => (
              <li key={member.id}>{member.user.name}</li>
            ))
          ) : (
            <li>Sem Membros</li>
          )}
        </MembersList>
        <Button
          onClick={() => dispatch(closeMembersModal())}
          type="button"
          color="gray"
          filled={false}
        >
          Cancelar
        </Button>
      </form>
    </Modal>
  );
};

export default Members;
