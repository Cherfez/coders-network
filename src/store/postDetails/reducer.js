const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POST_DETAILS_SUCCESS":
      return action.payload;

    case "POST_COMMENT_SUCCESS":
      return { ...state, comments: [...state.comments, action.payload] };

    default:
      return state;
  }
};
