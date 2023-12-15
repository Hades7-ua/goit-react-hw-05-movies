import { Toaster } from 'react-hot-toast';
import {
  AppContainer,
  Content,
  Header,
  Navigation,
  MovieLink,
  NavLinkStyled,
} from './AppStyled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Spinner } from './Loader/Spinner';

export const AppLayout = () => {
  return (
    <AppContainer>
      {' '}
      <Header>
        <Navigation>
          <Content>
            <MovieLink>
              <NavLinkStyled to="/">Home</NavLinkStyled>
            </MovieLink>
            <MovieLink>
              {' '}
              <NavLinkStyled to="/movies">Movies</NavLinkStyled>
            </MovieLink>
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
