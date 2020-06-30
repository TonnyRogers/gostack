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
