import { Toaster } from 'react-hot-toast';
import { AppContainer, Content, Header, Navigation } from './AppStyled';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Spinner } from './Loader/Spinner';

export const AppLayout = () => {
  return (
    <AppContainer>
      {' '}
      <Header>
        <Navigation>
          <Content>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              {' '}
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </Content>
        </Navigation>
      </Header>
      <main>
        {' '}
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Toaster />
    </AppContainer>
  );
};

export default AppLayout;
