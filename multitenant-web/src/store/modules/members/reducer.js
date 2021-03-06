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
      case '@members/UPDATE_MEMBERS_REQUEST': {
        const { memberId, roles } = action.payload;

        draft.data = draft.data.map((member) =>
          member.id === memberId ? { ...member, roles } : member
        );
        break;
      }
      case '@members/INVITE_MEMBER_REQUEST': {
        break;
      }
      case '@members/CLEAR_MEMBERS': {
        draft.membersModalOpen = false;
        draft.data = [];
        break;
      }
      default:
    }
  });
}
