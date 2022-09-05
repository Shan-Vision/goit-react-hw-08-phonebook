import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/user';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import { useAuth } from 'hooks/useAuth';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView/LoginView'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return !isRefreshing ? (
    <h1>Refreshing User...</h1>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PublicRoute component={<HomeView />} />} />
        <Route
          path="/register"
          element={
            <PublicRoute
              redirectTo="/contacts"
              restricted
              component={<RegisterView />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute
              redirectTo="/contacts"
              restricted
              component={<LoginView />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsView />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
