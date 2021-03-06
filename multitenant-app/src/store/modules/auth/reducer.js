import produce from 'immer';

const INITIAL_STATE = {
  authChecked: false,
  token: null,
  signed: false,
  loading: false,
  roles: [],
  permissions: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_UP_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/GET_PERMISSION_SUCCESS': {
        draft.roles = action.payload.roles;
        draft.permissions = action.payload.permissions;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        draft.roles = [];
        draft.permissions = [];
        break;
      }
      default:
    }
  });
}
