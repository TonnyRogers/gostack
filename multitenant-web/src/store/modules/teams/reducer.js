import produce from 'immer';

const INITIAL_STATE = {
  data: [],
};

export default function teams(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@teams/GET_TEAM_REQUEST':
        break;
      case '@teams/GET_TEAM_SUCCESS':
        draft.data = action.payload.data;
        break;
      case '@teams/GET_TEAM_FAILURE':
        break;
      default:
    }
  });
}
