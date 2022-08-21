import { HeadRow, Head, Table, HeadRowTitle } from './ContactList.styled';
import ContactItem from 'components/ContactItem';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getFilterContact } from 'redux/filtereSlice';
import { useMemo } from 'react';

const ContactList = () => {
  const { data, isSuccess } = useGetContactsQuery();
  const filter = useSelector(getFilterContact);

  const filteredContacts = useMemo(() => {
    return (
      data?.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      ) ?? []
    );
  }, [data, filter]);

  return (
    <>
      {isSuccess && (
        <>
          <Table>
            <Head>
              <HeadRow>
                <HeadRowTitle>Name</HeadRowTitle>
                <HeadRowTitle>Email</HeadRowTitle>
                <HeadRowTitle>Phone</HeadRowTitle>
                <HeadRowTitle></HeadRowTitle>
              </HeadRow>
            </Head>
            <tbody>
              {filteredContacts.map(contact => (
                <ContactItem key={contact.id} values={contact} />
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default ContactList;
