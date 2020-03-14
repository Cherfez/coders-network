const initialState = {
  token: localStorage.getItem("token")
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "USER_AUTHENTICATED":
      localStorage.setItem("token", action.payload);
      return { ...state, token: action.payload };

    case "PROFILE_FETCHED":
      return { ...state, ...action.payload };

    case "LOG_OUT":
      localStorage.removeItem("token");
      return { token: null };

    default:
      return state;
  }
}
