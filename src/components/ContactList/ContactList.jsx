import { List } from './ContactList.styled';
import ContactItem from 'components/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilterKit } from 'redux/contactsSlice';

function ContactList() {
  const contacts = useSelector(getContacts) ?? [];
  const filterName = useSelector(getFilterKit) ?? '';

  const filteredContacts = contacts.filter(elem =>
    elem.name.toLowerCase().includes(filterName)
  );

  return (
    <>
      <List>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
      </List>
    </>
  );
}

export default ContactList;
