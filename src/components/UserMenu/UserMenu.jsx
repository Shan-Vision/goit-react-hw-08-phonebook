import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/user';
import { GrLogout } from 'react-icons/gr';
import IconButton from 'components/IconButton';
import styled from 'styled-components';

const Containter = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useAuth();

  return (
    <Containter>
      <span>{!user.user ? 'UserName' : user.user}</span>
      <IconButton
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        <GrLogout size="17px" />
      </IconButton>
    </Containter>
  );
}
