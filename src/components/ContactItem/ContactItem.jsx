import { Item, ItemButton, ContactInfo, SideInfo } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsSlice';

function ContactItem({ id, name, phone, email }) {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <Item>
      <ContactInfo>
        <p>
          Name: <b>{name}</b>
        </p>
        <p>
          Phone: <b>{phone}</b>
        </p>
        <p>
          Email: <b>{email}</b>
        </p>
      </ContactInfo>
      <SideInfo>
        <ItemButton type="button" onClick={() => deleteContact(id)}>
          delete
        </ItemButton>
      </SideInfo>
    </Item>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
export default ContactItem;
