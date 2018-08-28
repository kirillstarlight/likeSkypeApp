import { SET_ACTIVE_USER_ID } from '../constants/index';

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id,
});
