import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import FilterContacts from 'components/FilterContacts';
import { AppContainer, MainContent, ContentBox } from './ContactsViews.styled';
import { getFilterContact, setFilterContact } from 'redux/filtereSlice';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { useMemo, useEffect } from 'react';

export const ContactsView = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  const filter = useSelector(getFilterContact);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const handleChange = event => {
    const value = event.target.value;
    dispatch(setFilterContact(value));
  };

  const filteredContacts = useMemo(() => {
    return (
      contacts?.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      ) ?? []
    );
  }, [contacts, filter]);

  return (
    <div>
      <AppContainer>
        <MainContent>
          <ContactForm />
          <ContentBox>
            <FilterContacts onChange={handleChange} />
            {contacts && <ContactList contacts={filteredContacts} />}
          </ContentBox>
        </MainContent>
      </AppContainer>
    </div>
  );
};

export default ContactsView;
