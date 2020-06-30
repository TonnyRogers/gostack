import React from 'react';

import { Container, TeamList, Team } from './styles';

function TeamSwitcher() {
  return (
    <Container>
      <TeamList>
        <Team>
          <img
            src="https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=UserName"
            alt="UserName"
          />
        </Team>
        <Team>
          <img
            src="https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=UserName"
            alt="UserName"
          />
        </Team>
        <Team>
          <img
            src="https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=UserName"
            alt="UserName"
          />
        </Team>
      </TeamList>
    </Container>
  );
}

export default TeamSwitcher;
