import { Toaster } from 'react-hot-toast';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import FilterContacts from 'components/FilterContacts';
import Header from './Header';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { AppContainer,MainContent, ContentBox } from './App.styled';

const App = () => {
  const { isSuccess } = useGetContactsQuery();

  return (
    <AppContainer>
      <Header />
      <MainContent>
        <ContactForm />
        <ContentBox>
          <FilterContacts />
          {isSuccess && <ContactList />}
        </ContentBox>
      </MainContent>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: '#363636',
            color: '#fff',
            padding: '12px',
          },
        }}
      />
    </AppContainer>
  );
};

export default App;
