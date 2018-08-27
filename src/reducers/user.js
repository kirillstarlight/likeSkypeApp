import { generateUser } from '../static-data';

const reducer = (state = generateUser(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
