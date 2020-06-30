import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTeamsRequest } from '~/store/modules/teams/actions';
import { Container, TeamList, Team } from './styles';

function TeamSwitcher() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams.data);

  useEffect(() => {
    dispatch(getTeamsRequest());
  }, []);

  return (
    <Container>
      <TeamList>
        {teams.map((team) => (
          <Team key={team.id}>
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
