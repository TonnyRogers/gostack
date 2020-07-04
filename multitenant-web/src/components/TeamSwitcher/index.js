import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getTeamsRequest,
  selectTeamResquest,
  openTeamModal,
  closeTeamModal,
  createTeamRequest,
} from '~/store/modules/teams/actions';
import { signOut } from '~/store/modules/auth/actions';

import Button from '~/styles/components/Button';
import Modal from '../Modal';
import { Container, TeamList, Team, NewTeam, Logout } from './styles';

function TeamSwitcher() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);
  const [newTeam, setNewTeam] = useState('');

  // eslint-disable-next-line
  useEffect(() => {
    dispatch(getTeamsRequest());
  }, [dispatch, teams.team]);

  function handleCreateTeam(e) {
    e.preventDefault();

    dispatch(createTeamRequest(newTeam));
  }

  return (
    <Container>
      <TeamList>
        {teams.data.map((team) => (
          <Team
            key={team.id}
            onClick={() => dispatch(selectTeamResquest(team))}
            current={teams.active.id === team.id}
          >
            <img
              src={`https://ui-avatars.com/api/?font-size=0.33&background=${
                teams.active.id === team.id ? '59c18b' : '7159c1'
              }&color=fff&name=${team.name}`}
              alt={team.name}
              title={team.name}
            />
          </Team>
        ))}

        {teams.teamModalOpen && (
          <Modal>
            <h1>Criar Time</h1>
            <form onSubmit={(e) => handleCreateTeam(e)}>
              <input
                type="text"
                name="newTeam"
                value={newTeam}
                onChange={(e) => setNewTeam(e.target.value)}
              />
              <Button type="submit" size="big">
                Salvar
              </Button>
              <Button
                type="button"
                size="small"
                color="gray"
                onClick={() => dispatch(closeTeamModal())}
              >
                Cancelar
              </Button>
            </form>
          </Modal>
        )}
      </TeamList>

      <NewTeam onClick={() => dispatch(openTeamModal())}>Novo</NewTeam>

      <Logout onClick={() => dispatch(signOut())}>SAIR</Logout>
    </Container>
  );
}

export default TeamSwitcher;
