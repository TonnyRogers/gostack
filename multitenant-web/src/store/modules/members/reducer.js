import produce from 'immer';

const INITIAL_STATE = {
  membersModalOpen: false,
  data: [],
};

export default function members(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@members/OPEN_MEMBERS_MODAL': {
        draft.membersModalOpen = true;
        break;
      }
      case '@members/CLOSE_MEMBERS_MODAL': {
        draft.membersModalOpen = false;
        break;
      }
      case '@members/GET_MEMBERS_SUCCESS': {
        draft.data = action.payload.members;
        break;
      }
      default:
    }
  });
}
