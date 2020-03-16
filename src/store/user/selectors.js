export function selectToken(reduxState) {
  return reduxState.user.token;
}

export function selectUserName(reduxState) {
  return reduxState.user.name;
}
