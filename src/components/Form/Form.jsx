import { useState } from 'react';
// import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './Form.styled';

import { useAddContactMutation } from 'redux/contactsSlice';

const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  // const [email, setEmail] = useState('');
  // const [country, setCountry] = useState('');
  // const [avatar, setAvatar] = useState('');

  const [addContact, { data, isUninitialized, isSuccess, isLoading }] =
    useAddContactMutation();

  // console.log('data :>> ', data);
  // console.log('isUninitialized :>> ', isUninitialized);
  // console.log('isSuccess :>> ', isSuccess);
  // console.log('isLoading :>> ', isLoading);

  // const handleNameChange = event => {
  //   console.log(event.target);
  //   const { value, name } = event.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     case 'country':
  //       setCountry(value);
  //       break;
  //     case 'email':
  //       setEmail(value);
  //       break;
  //     case 'avatar':
  //       setAvatar(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target.elements;
    const name = form.name.value;
    const phone = form.number.value;
    const email = form.email.value;
    addContact({ name, email, phone });
    evt.target.reset();
    // try {
    //   addContact(name, number, email).unwrap();
    // } catch (error) {
    //   console.log(error);
    // }

    // const findIncludeName = !contactList.filter(
    //   contact => contact.toLowerCase() === name.toLowerCase()
    // ).length;

    // if (findIncludeName) {
    //   dispatch(addContact({ id: shortid.generate(), name, number, country }));
    //   resetForm();
    // } else {
    //   alert(`${name} is already in contacts`);
    // }
  };

  // const resetForm = () => {
  //   setName('');
  //   setNumber('');
  //   setEmail('');
  //   setCountry('');

  // };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Name</Label>
      <Input
        type="text"
        name="name"
        id=""
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label>Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Label>Email</Label>
      <Input
        type="email"
        name="email"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
