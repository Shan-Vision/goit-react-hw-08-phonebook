import { HeadRow, Head, Table, HeadRowTitle } from './ContactList.styled';
import ContactItem from 'components/ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <>
      <Table>
        <Head>
          <HeadRow>
            <HeadRowTitle>Name</HeadRowTitle>
            <HeadRowTitle>Phone</HeadRowTitle>
            <HeadRowTitle></HeadRowTitle>
          </HeadRow>
        </Head>
        <tbody>
          {contacts.map(contact => (
            <ContactItem key={contact.id} values={contact} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ContactList;
