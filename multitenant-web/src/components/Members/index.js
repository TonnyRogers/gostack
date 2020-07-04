import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import {
  closeMembersModal,
  getMembersRequest,
  updateMembersRequest,
  inviteMemberResquest,
} from '~/store/modules/members/actions';

import api from '~/services/api';
import Can from '~/components/Can';
import Modal from '../Modal';
import { MembersList, Invite } from './styles';
import Button from '~/styles/components/Button';

const Members = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members);
  const [roles, setRoles] = useState([]);
  const [invite, setInvite] = useState('');

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

  function handleInvite(e) {
    e.preventDefault();

    dispatch(inviteMemberResquest(invite));

    setInvite('');
  }

  return (
    <Modal size="big">
      <h1>Membros</h1>

      <Can checkPermission="invites_create">
        <Invite onSubmit={(e) => handleInvite(e)}>
          <input
            type="text"
            placeholder="Convidar para o time"
            value={invite}
            onChange={(e) => setInvite(e.target.value)}
          />
          <Button type="submit">Enviar</Button>
        </Invite>
      </Can>

      <form>
        <MembersList>
          {members.data ? (
            members.data.map((member) => (
              <li key={member.id}>
                <strong>{member.user.name}</strong>
                <Can checkRole="admin">
                  {(can) => (
                    <Select
                      isMulti
                      options={roles}
                      isDisabled={!can}
                      value={member.roles}
                      getOptionLabel={(role) => role.name}
                      getOptionValue={(role) => role.id}
                      onChange={(value) => handleRolesChange(member.id, value)}
                    />
                  )}
                </Can>
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
