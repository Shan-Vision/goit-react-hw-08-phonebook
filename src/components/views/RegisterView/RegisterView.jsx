import { Formik, ErrorMessage, useField } from 'formik';
import * as yup from 'yup';
import { FormStyle, Input, Button, ButtonBox } from './RegisterView.styled';
import { authOperations } from 'redux/user';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { MdRemoveCircleOutline, MdLogin } from 'react-icons/md';
import { Box } from 'components/Box';

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

const RegisterView = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const dispatch = useDispatch();
  let submitAction = '' ?? undefined;

  const handleSubmit = async ({ name, email, password }, { resetForm }) => {
    try {
      const newUser = {
        name,
        email,
        password,
      };
      if (submitAction === 'signup') {
        dispatch(authOperations.register(newUser));
        resetForm();
        toast.success(`Welcome ${name}`);
        return;
      }
      if (submitAction === 'reset') {
        resetForm();
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const style = { color: 'white', size: '30px' };

  return (
    <main>
      <Box display="flex" justifyContent="center" alignItems="center" pt={40}>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, values: { name, email, password } }) => (
            <FormStyle>
              <MyTextField
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Name"
              />
              <FormError name="name" component="div" />
              <MyTextField
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
              />
              <FormError name="email" component="div" />

              <MyTextField
                autoComplete="true"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
              />
              <FormError name="password" component="div" />

              <ButtonBox>
                <Button
                  type="submit"
                  onClick={() => {
                    submitAction = 'signup';
                  }}
                >
                  <MdLogin style={style} />
                  Sign up
                </Button>
                {showResetButton && (
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      submitAction = 'reset';
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
      </Box>
    </main>
  );
};

export default RegisterView;
