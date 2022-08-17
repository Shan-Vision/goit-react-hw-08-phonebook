import { Form, Label, Input, Button } from './Form.styled';
import { useAddContactMutation } from 'redux/contactsSlice';

const ContactForm = () => {
  const [addContact] = useAddContactMutation();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target.elements;
    const name = form.name.value;
    const phone = form.number.value;
    const email = form.email.value;
    addContact({ name, email, phone });
    evt.target.reset();

    // if (findIncludeName) {
    //   dispatch(addContact({ id: shortid.generate(), name, number, country }));
    //   resetForm();
    // } else {
    //   alert(`${name} is already in contacts`);
    // }
  };

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
