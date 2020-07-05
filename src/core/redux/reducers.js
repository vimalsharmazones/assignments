import { combineReducers } from "redux";
import { feedsReducer } from "../../assignment-unlu/redux/reducers/feed-reducer";

export const rootReducer = combineReducers({
  feeds: feedsReducer,
});
