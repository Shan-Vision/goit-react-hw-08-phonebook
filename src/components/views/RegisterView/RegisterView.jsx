import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormStyle, Input, Button } from './RegisterView.styled';
import { authOperations } from 'redux/user';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  email: yup.string(),
  password: yup.string(),
});

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <div>{message}</div>} />;
};

const RegisterView = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const dispatch = useDispatch();

  const handleSubmit = async ({ name, email, password }, { resetForm }) => {
    try {
      const newUser = {
        name,
        email,
        password,
      };

      dispatch(authOperations.register(newUser));
      resetForm();
      toast.success('Registration is complete');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values: { name, email, password } }) => (
        <FormStyle>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
          />
          <FormError name="name" component="div" />
          <Input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
          />
          <FormError name="email" component="div" />

          <Input
            autoComplete="true"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
          />
          <FormError name="password" component="div" />

          <Button type="submit">Sign up</Button>
        </FormStyle>
      )}
    </Formik>
  );
};

export default RegisterView;
