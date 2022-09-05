import { BodyRowTitle, BodyRow } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { IoPerson, IoPhonePortrait } from 'react-icons/io5';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { deleteContact } from 'redux/contacts/contacts-operations';
import IconButton from 'components/IconButton';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const ContactItem = ({ values: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <BodyRow>
      <BodyRowTitle>
        <IoPerson style={{ marginRight: '6px' }} />
        {name}
      </BodyRowTitle>
      <BodyRowTitle>
        <IoPhonePortrait style={{ marginRight: '6px' }} />
        {number}
      </BodyRowTitle>
      <BodyRowTitle>
        <IconButton
          onClick={() => {
            dispatch(deleteContact(id));
            toast.success('Contact was successfully deleted');
          }}
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
