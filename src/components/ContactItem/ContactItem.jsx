import { Item, ItemButton } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <Item>
      <span>{name}:</span>
      <span>{number}</span>
      <ItemButton
        type="button"
        onClick={() => {
          dispatch(removeContact(id));
        }}
      >
        delete
      </ItemButton>
    </Item>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactItem;
