import { Formik, ErrorMessage } from 'formik';
import NumberFormat from 'react-number-format';
import { FormStyle, Label, Input, Button } from './Form.styled';
import * as yup from 'yup';
import toast from 'react-hot-toast';

import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),
  number: yup.string().required('Phone number is required'),
  email: yup.string().email().required('Email is required'),
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

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <div>{message}</div>} />;
};

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
    email: '',
  };

  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleSubmit = async ({ name, number, email }, { resetForm }) => {
    // evt.preventDefault();

    const NameList = contacts.map(contact => contact.name.toLowerCase());
    const findIncludeName = name => {
      if (NameList.includes(name.toLowerCase())) {
        toast.error(`${name} is already in contacts`);
        return;
      }
    };

    if (findIncludeName(name)) {
      return;
    }
    try {
      const newContact = {
        name,
        number,
        email,
      };
      await addContact(newContact);
      resetForm();
      toast.success(`New contacts has been successfully added`);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {({ handleChange, values: { name, number, email } }) => (
        <FormStyle>
          <Label htmlFor="name">
            Name
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Jonh Doe"
            />
            <FormError name="name" component="div" />
          </Label>
          <Label htmlFor="number">
            Number
            <Input
              type="text"
              name="number"
              value={number}
              onChange={handleChange}
              component={InputNumberFormat}
            />
            <FormError name="number" component="div" />
          </Label>

          <Label htmlFor="email">
            Email
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <FormError name="email" component="div" />
          </Label>

          <Button type="submit">Add contact</Button>
        </FormStyle>
      )}
    </Formik>
  );
};

export default ContactForm;
