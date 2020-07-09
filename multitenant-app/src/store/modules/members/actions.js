export function openMembersModal() {
  return {
    type: '@members/OPEN_MEMBERS_MODAL',
  };
}

export function closeMembersModal() {
  return {
    type: '@members/CLOSE_MEMBERS_MODAL',
  };
}

export function getMembersRequest() {
  return {
    type: '@members/GET_MEMBERS_REQUEST',
  };
}

export function getMembersSuccess(members) {
  return {
    type: '@members/GET_MEMBERS_SUCCESS',
    payload: { members },
  };
}

export function updateMembersRequest(memberId, roles) {
  return {
    type: '@members/UPDATE_MEMBERS_REQUEST',
    payload: { memberId, roles },
  };
}

export function inviteMemberResquest(email) {
  return {
    type: '@members/INVITE_MEMBER_REQUEST',
    payload: { email },
  };
}

export function clearMembers() {
  return {
    type: '@members/CLEAR_MEMBERS',
  };
}
