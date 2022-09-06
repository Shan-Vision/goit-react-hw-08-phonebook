import { Formik, ErrorMessage, useField } from 'formik';
import * as yup from 'yup';
import { FormStyle, Input, Button, ButtonBox } from './LoginView.styled';
import { MdRemoveCircleOutline, MdLogin } from 'react-icons/md';
import { authOperations } from 'redux/user';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { Box } from 'components/Box';


const schema = yup.object().shape({
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

export const LoginView = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  let submitAction = '' ?? undefined;

  const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    try {
      const newUser = {
        email,
        password,
      };
      if (submitAction === 'login') {
        dispatch(authOperations.logIn(newUser));
        resetForm();
        toast.success('Welcome back!');
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
          {({ handleChange, values: { email, password } }) => (
            <FormStyle>
              <MyTextField
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

              <ButtonBox>
                <Button
                  type="submit"
                  onClick={() => {
                    submitAction = 'login';
                  }}
                >
                  <MdLogin style={style} />
                  Login
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

export default LoginView;
