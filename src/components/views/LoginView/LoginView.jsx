import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormStyle, Input, Button } from './LoginView.styled';
import { authOperations } from 'redux/user';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const schema = yup.object().shape({
  email: yup.string(),
  password: yup.string(),
});

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <div>{message}</div>} />;
};

export const LoginView = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    try {
      const newUser = {
        email,
        password,
      };

      dispatch(authOperations.logIn(newUser));
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
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
          />
          <FormError name="email" component="div" />

          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
          />
          <FormError name="password" component="div" />

          <Button type="submit">Login</Button>
        </FormStyle>
      )}
    </Formik>
  );
};

export default LoginView;
