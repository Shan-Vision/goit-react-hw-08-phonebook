import { List } from './ContactList.styled';
import ContactItem from 'components/ContactItem';
import { useGetContactsQuery } from 'redux/contactsSlice';

function ContactList() {
  const { data, isSuccess } = useGetContactsQuery();
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
