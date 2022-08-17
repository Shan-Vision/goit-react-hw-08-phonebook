import ContactForm from 'components/Form';
import ContactList from 'components/ContactList';
// import FilterContacts from 'components/FilterContacts';
import { useGetContactsQuery } from 'redux/contactsSlice';

const App = () => {
  const { isSuccess } = useGetContactsQuery();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {/* <FilterContacts /> */}
      {isSuccess && <ContactList />}
    </div>
  );
};

export default App;
