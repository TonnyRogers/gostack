import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getTeamsRequest,
  selectTeamResquest,
} from '~/store/modules/teams/actions';
import { Container, TeamList, Team } from './styles';

function TeamSwitcher() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams.data);

  useEffect(() => {
    function getTeams() {
      dispatch(getTeamsRequest());
    }

    getTeams();
  }, [dispatch]);

  function selectTeam(team) {
    dispatch(selectTeamResquest(team));
  }

  return (
    <Container>
      <TeamList>
        {teams.map((team) => (
          <Team key={team.id} onClick={() => selectTeam(team)}>
            <img
              src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`}
              alt={team.name}
              title={team.name}
            />
          </Team>
        ))}
      </TeamList>
    </Container>
  );
}

export default TeamSwitcher;
