const authSelectors = {
  getIsLoggedIn: state => state.auth.isLoggedIn,
  getUserName: state => state.auth.user.name,
  getIsRefrechingUser: state => state.auth.isRefreshingUser,
};

export default authSelectors;
