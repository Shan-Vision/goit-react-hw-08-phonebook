import AuthNav from 'components/AuthNav/AuthNav';
import HeadTitle from 'components/HeadTitle';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  background-color: #fff;
`;
export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <HeadTitle />
      <Container>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </header>
  );
};
