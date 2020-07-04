import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  teamModalOpen: false,
  active: JSON.parse(localStorage.getItem('@Omni:team')) || null,
};

export default function teams(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@teams/GET_TEAM_SUCCESS':
        draft.data = action.payload.data;
        break;
      case '@teams/SELECT_TEAM_SUCCESS':
        draft.active = action.payload.team;
        break;
      case '@teams/OPEN_TEAM_MODAL':
        draft.teamModalOpen = true;
        break;
      case '@teams/CLOSE_TEAM_MODAL':
        draft.teamModalOpen = false;
        break;
      case '@teams/CREATE_TEAM_SUCCESS':
        draft.team = action.payload.team;
        draft.teamModalOpen = false;
        break;
      case '@teams/CLEAR_TEAM':
        draft.active = null;
        draft.data = [];
        draft.teamModalOpen = false;
        draft.team = null;
        break;
      default:
    }
  });
}
