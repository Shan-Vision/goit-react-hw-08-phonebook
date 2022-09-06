import { Caption, Title, HeadContainer, Span } from './HomeView.styled';

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
    </>
  );
};

export default HomeView;
