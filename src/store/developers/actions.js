import axios from "axios";

// export function thunkExample() {
//   return async function(dispatch, getState) {
//     const reduxState = getState();
//     console.log("WHAT IS IN THE STATE", reduxState);
//     if (reduxState.posts.length === 0) {
//       dispatch({ type: "I_AM_LOADING" });
//       dispatch({ type: "SOMETHING HAPPENED" });
//       dispatch({ type: "SOMETHING ELSE" });
//       dispatch({ type: "I_AM_DONE" });
//     } else {
//       dispatch({ type: "WE_ALREADY_HAVE_WHAT_WE_NEED" });
//     }
//   };
// }

function fetchDevelopersSucces(data) {
  return { type: "FETCHED_DEVELOPERS_SUCCESS", payload: data };
}

export function fetchDevelopersThunk() {
  return async function(dispatch, getState) {
    const reduxState = getState();
    const limit = 5;
    const developerCount = reduxState.developers.rows.length;
    //console.log(reduxState.developers.rows.length, reduxState.developers.count);

    // offste and limit, so it only gets what i tell it
    const response = await axios.get(
      `https://codaisseur-coders-network.herokuapp.com/developers?offset=${developerCount}&limit=${limit}`
    );

    //console.log("here?", response);
    const action = fetchDevelopersSucces(response.data);
    //console.log("action", action);
    dispatch(action);
  };
}
