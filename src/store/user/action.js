import axios from "axios";

const baseUrl = "https://codaisseur-coders-network.herokuapp.com";

export function userAuthenticated(token) {
  return {
    type: "USER_AUTHENTICATED",
    payload: token
  };
}

function profileFetched(profile) {
  return {
    type: "PROFILE_FETCHED",
    payload: profile
  };
}

export function logout() {
  return {
    type: "LOG_OUT"
  };
}

export function signUpThunk(name, password, email) {
  return async function(dispatch, getState) {
    //console.log("INSIDE THUNK", name, password, email);
    const response = await axios.post(`${baseUrl}/signup`, {
      name: name,
      email: email,
      password: password
    });

    console.log("response", response);
    dispatch(userAuthenticated(response.data.jwt));
  };
}

export function loginThunk(email, password) {
  return async function(dispatch, getState) {
    //console.log("in thunk", email, password);

    const response = await axios.post(`${baseUrl}/login`, {
      email: email,
      password: password
    });
    //console.log("response thunk", response);

    const token = response.data.jwt;
    dispatch(userAuthenticated(token));

    const profileResponse = await axios.get(`${baseUrl}/me`, {
      // set headers
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    //console.log("profile resp", profileResponse);

    console.log("prof resp data", profileResponse.data);
    dispatch(profileFetched(profileResponse.data));
  };
}

export function fetchOwnProfile() {
  return async function(dispatch, getState) {
    const state = getState(); // check if we have a token
    const token = state.user.token;

    if (token === null) return; // dont do anything

    // we have a token check if valid
    try {
      const profileResponse = await axios.get(`${baseUrl}/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      //console.log(profileResponse.data);

      dispatch(profileFetched(profileResponse.data));
    } catch (error) {
      // my request failed probably my token is no longer valid
      // it expired, because you can only use it for a couple of hours
      dispatch(logout());
      console.log(error);
    }
  };
}
