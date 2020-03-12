import axios from "axios";

function developerFetchedSuccess(developer) {
  return {
    type: "FETCH_DEVELOPER_DETAILS_SUCCESS",
    payload: developer
  };
}

export function fetchDeveloperById(developerId) {
  return async function(dispatch, getState) {
    const response = await axios.get(
      `https://codaisseur-coders-network.herokuapp.com/developers/${developerId}`
    );
    //console.log("response", response);

    dispatch(developerFetchedSuccess(response.data));
  };
}
