import { Formik, ErrorMessage, useField } from 'formik';
import NumberFormat from 'react-number-format';
import { FormStyle, Input, Button, ButtonBox } from './ContactForm.styled';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { MdRemoveCircleOutline, MdDone } from 'react-icons/md';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { useDispatch, useSelector } from 'react-redux';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup.string(),
});

const InputNumberFormat = ({ field, ...props }) => (
  <NumberFormat
    {...field}
    {...props}
    format="+46 (##) ###-##-##"
    mask="_"
    allowEmptyFormatting
  />
);

let showResetButton = false;
const MyTextField = ({ ...props }) => {
  const [field] = useField(props);
  if (field.value !== '') {
    showResetButton = true;
  } else {
    showResetButton = false;
  }
  return (
    <>
      <Input {...field} {...props} />
    </>
  );
};

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <div>{message}</div>} />;
};

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  let submitAction = '' ?? undefined;

  const handleSubmit = async ({ name, number }, { resetForm }) => {
    const nameList = contacts?.map(contact => contact.name.toLowerCase());

    if (!nameList) {
      return;
    }

    const findIncludeName = !nameList.filter(
      item => item.toLowerCase() === name.toLowerCase()
    ).length;

    try {
      const newContact = {
        name,
        number,
      };

      if (submitAction === 'primary' && findIncludeName) {
        dispatch(contactsOperations.addContact(newContact));
        resetForm();
        toast.success(`New contacts has been successfully added`);
        return;
      } else if (submitAction === 'secondary') {
        toast.success(`Reset was succeessfully completed`);
        resetForm({ name: '', number: '' });
        return;
      } else {
        return toast.error(`${name} is already in contacts`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const style = { color: 'white', size: '30px' };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {({ handleChange, values: { name, number } }) => (
        <FormStyle>
          <h3>New Contact</h3>
          <MyTextField
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
          />
          <FormError name="name" component="div" />

          <Input
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
            // placeholder="Number"
            component={InputNumberFormat}
          />
          <FormError name="number" component="div" />
          <ButtonBox>
            <Button
              type="submit"
              onClick={() => {
                submitAction = 'primary';
              }}
            >
              <MdDone style={style} />
              Add contact
            </Button>
            {showResetButton && (
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                onClick={() => {
                  submitAction = 'secondary';
                }}
              >
                <MdRemoveCircleOutline style={style} />
                Reset
              </Button>
            )}
          </ButtonBox>
        </FormStyle>
      )}
    </Formik>
  );
};

export default ContactForm;
