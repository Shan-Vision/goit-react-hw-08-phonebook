import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({
  redirectTo = '/',
  restricted = false,
  component: Component,
}) {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
