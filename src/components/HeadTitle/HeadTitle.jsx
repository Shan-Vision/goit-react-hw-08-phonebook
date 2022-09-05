import { Caption, Title, HeadContainer, Line } from './HeadTitle.styled';

const Header = () => {
  return (
    <>
      <HeadContainer>
        <div>
          <Title>My Contact List</Title>
          <Caption>
            A simple React app to help you managing your contacts.
          </Caption>
        </div>
      </HeadContainer>
      <Line />
    </>
  );
};

export default Header;
