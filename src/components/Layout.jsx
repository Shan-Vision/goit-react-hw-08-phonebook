import { AppBar } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import GlobalStyle from 'components/GlobalStyle';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: '#363636',
            color: '#fff',
            padding: '12px',
          },
        }}
      />
    </div>
  );
};
