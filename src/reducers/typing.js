import { SET_TYPING_VALUE } from '../constants/index';

const reducer = (state = '', action) => {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
