const { FETCH_FEEDS } = require("../unlu-action-types");

const initialState = {
  feedList: {
    posts: [],
    page: null,
  },
};

export function feedsReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_FEEDS:
      return Object.assign({}, state, { feedList: action.payload });
    default:
      return state;
  }
}
