export function selectToken(reduxState) {
  return reduxState.user.token;
}

export function selectUserEmail(reduxState) {
  return reduxState.user.email;
}
