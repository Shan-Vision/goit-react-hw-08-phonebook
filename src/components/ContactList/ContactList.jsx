import { List } from './ContactList.styled';
import ContactItem from 'components/ContactItem';
import { useGetContactsQuery } from 'redux/contactsSlice';

// import { useSelector } from 'react-redux';
// import { getContacts, getFilterKit } from 'redux/contactsSlice';

function ContactList() {
  // const contacts = useSelector(getContacts) ?? [];
  // const filterName = useSelector(getFilterKit) ?? '';
  const { data, isSuccess } = useGetContactsQuery();

  // const filteredContacts = data.filter(elem =>
  //   elem.name.toLowerCase().includes(filterName)
  // );

  return (
    <>
      {isSuccess && (
        <List>
          {data.map(({ id, name, phone, email }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              phone={phone}
              email={email}
            />
          ))}
        </List>
      )}
    </>
  );
}

export default ContactList;
