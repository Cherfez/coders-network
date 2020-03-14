// ROOT REDUCER

import { combineReducers } from "redux";
import posts from "./posts/reducer";
import postDetails from "./postDetails/reducer";
import developers from "./developers/reducer";
import developerDetails from "./developersDetails/reducer";
import user from "./user/reducer";

const reducer = combineReducers({
  posts: posts,
  postDetails: postDetails,
  developers: developers,
  developerDetails: developerDetails,
  user: user
});

export default reducer;
