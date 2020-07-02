import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import {
  closeMembersModal,
  getMembersRequest,
  updateMembersRequest,
} from '~/store/modules/members/actions';

import api from '~/services/api';
import Modal from '../Modal';
import { MembersList } from './styles';
import Button from '~/styles/components/Button';

const Members = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    dispatch(getMembersRequest());

    async function getRoles() {
      const response = await api.get('/roles');

      if (response.data) {
        setRoles(response.data);
      }
    }

    getRoles();
  }, [dispatch]);

  function handleRolesChange(id, values) {
    dispatch(updateMembersRequest(id, values));
  }

  return (
    <Modal size="big">
      <h1>Membros</h1>

      <form>
        <MembersList>
          {members.data ? (
            members.data.map((member) => (
              <li key={member.id}>
                <strong>{member.user.name}</strong>
                <Select
                  isMulti
                  options={roles}
                  value={member.roles}
                  getOptionLabel={(role) => role.name}
                  getOptionValue={(role) => role.id}
                  onChange={(value) => handleRolesChange(member.id, value)}
                />
              </li>
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
