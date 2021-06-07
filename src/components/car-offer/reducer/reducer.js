import * as types from './types';

const reducer = (state, action) => {
  switch (action.type) {
    case types.ADD_REVIEW:
      return {
        ...state,
        reviews: [
          action.payload,
          ...state.reviews
        ]
      };

    default:
      return state;
  }
};

export default reducer;
