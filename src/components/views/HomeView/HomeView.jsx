import {
  Caption,
  Title,
  HeadContainer,
  StyledNavLink,
  ButtonBox,
} from './HomeView.styled';

export const HomeView = () => {
  return (
    <>
      <HeadContainer>
        <div>
          <Title>PhoneBook</Title>
          <Caption>
            A simple React app to help you managing your contacts.
          </Caption>
        </div>
      </HeadContainer>
      {/* <Line /> */}
      <ButtonBox>
        <StyledNavLink to="/register">Sign Up</StyledNavLink>
        <StyledNavLink to="/login">Login</StyledNavLink>
      </ButtonBox>
    </>
  );
};

export default HomeView;
