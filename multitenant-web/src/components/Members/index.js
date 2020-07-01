import React from 'react';
import { useDispatch } from 'react-redux';

import Modal from '../Modal';
import { MembersList } from './styles';
import Button from '~/styles/components/Button';

import { closeMembersModal } from '~/store/modules/members/actions';

const Members = () => {
  const dispatch = useDispatch();

  return (
    <Modal>
      <h1>Membros</h1>

      <form>
        <MembersList>
          <li>
            <strong>Tony Amaral</strong>
          </li>
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
