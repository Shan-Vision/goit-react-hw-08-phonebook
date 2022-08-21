import { Caption, Title, HeadContainer } from './Header.styled';

const Header = () => {
  return (
    <HeadContainer>
      <Title>My Contact List</Title>
      <Caption>A simple React app to help you managing your contacts.</Caption>
      <hr />
    </HeadContainer>
  );
};

export default Header;
