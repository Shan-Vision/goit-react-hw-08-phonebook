import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/user';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsRefrechingUser);
  const user = useSelector(authSelectors.getUserName);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
