import { combineReducers } from "redux";
import posts from "./posts/reducer";
const reducer = combineReducers({
  posts: posts
  // etc.
});
export default reducer;
