import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

import {
  getTeamsRequest,
  selectTeamResquest,
} from '../../store/modules/teams/actions';
import { Container, TeamButton, TeamAvatar, NewTeamButton } from './styles';

const TeamSwitcher = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);

  useEffect(() => {
    dispatch(getTeamsRequest());
  }, []);

  return (
    <Container>
      {teams.data.map((team) => (
        <TeamButton
          onPress={() => dispatch(selectTeamResquest(team))}
          key={team.id}
        >
          <TeamAvatar
            source={{
              uri: `https://ui-avatars.com/api/?fontsize=0.33&background=7159c1&color=FFF&name=${team.name}`,
            }}
          />
        </TeamButton>
      ))}
      <NewTeamButton onPress={() => {}}>
        <Icon name="add" size={24} color="#999" />
      </NewTeamButton>
    </Container>
  );
};

export default TeamSwitcher;
