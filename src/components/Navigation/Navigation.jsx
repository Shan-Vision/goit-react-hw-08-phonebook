import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size: 20px;
  color: #0f1011;

  &.active {
    color: #e84a5f;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn ? (
        <Link to="/contacts">Contacts</Link>
      ) : (
        <Link to="/">Home</Link>
      )}
    </nav>
  );
};
export default Navigation;
