export function getTeamsRequest() {
  return {
    type: '@teams/GET_TEAM_REQUEST',
  };
}

export function getTeamsSuccess(data) {
  return {
    type: '@teams/GET_TEAM_SUCCESS',
    payload: { data },
  };
}

export function getTeamsFailure() {
  return {
    type: '@teams/GET_TEAM_FAILURE',
  };
}

export function selectTeamResquest(team) {
  return {
    type: '@teams/SELECT_TEAM_REQUEST',
    payload: { team },
  };
}

export function selectTeamSuccess(team) {
  return {
    type: '@teams/SELECT_TEAM_SUCCESS',
    payload: { team },
  };
}

export function selectTeamFailure() {
  return {
    type: '@teams/SELECT_TEAM_FAILURE',
  };
}
