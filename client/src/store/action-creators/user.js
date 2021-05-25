import {
  SET_LOGIN_ERROR_MSG,
  SET_LOGIN_STATUS,
  SET_USER,
  UNSET_USER,
  SET_CREATE_USER_STATUS,
  SET_CREATE_USER_ERROR_MSG,
} from '../action-types/user';

export function setUser(UserObj) {
  return {
    type: SET_USER,
    payload: UserObj,
  };
}

export function unsetUser() {
  return {
    type: UNSET_USER,
  };
}
export function setLoginStatus(loginStatus) {
  return {
    type: SET_LOGIN_STATUS,
    payload: loginStatus,
  };
}

export function setLoginErrorMsg(errorMsg) {
  return {
    type: SET_LOGIN_ERROR_MSG,
    payload: errorMsg,
  };
}

export function setCreateUserStatus(status) {
  return {
    type: SET_CREATE_USER_STATUS,
    payload: status,
  };
}

export function setCreateUserErrorMsg(errorMsg) {
  return {
    type: SET_CREATE_USER_ERROR_MSG,
    payload: errorMsg,
  };
}
