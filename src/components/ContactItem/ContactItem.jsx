import { BodyRowTitle, BodyRow } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { IoPerson, IoMailSharp, IoPhonePortrait } from 'react-icons/io5';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import IconButton from 'components/IconButton';
import toast from 'react-hot-toast';

const ContactItem = ({ values: { id, name, number, email } }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <BodyRow>
      <BodyRowTitle>
        <IoPerson style={{ marginRight: '6px' }} />
        {name}
      </BodyRowTitle>
      <BodyRowTitle>
        <IoMailSharp style={{ marginRight: '6px' }} />
        {email}
      </BodyRowTitle>
      <BodyRowTitle>
        <IoPhonePortrait style={{ marginRight: '6px' }} />
        {number}
      </BodyRowTitle>
      <BodyRowTitle>
        <IconButton
          onClick={() => {
            deleteContact(id);
            toast.success('Contact was successfully deleted');
          }}
          disabled={isLoading}
        >
          <RiDeleteBin6Fill size={22} />
        </IconButton>
      </BodyRowTitle>
    </BodyRow>
  );
};

ContactItem.propTypes = {
  values: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
export default ContactItem;

/* <RiDeleteBin6Fill
    onClick={() => {
      deleteContact(id);
      toast.success('Contact was successfully deleted');
    }}
    style={{ cursor: 'pointer' }}
  /> */
