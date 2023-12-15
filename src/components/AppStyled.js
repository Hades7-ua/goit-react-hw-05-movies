import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const Header = styled.header`
  background-color: #545;
  padding: 4px;
  &:hover {
    color: #ff4500;
  }
`;

export const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: ;
    display: flex;
    justify-content: center;

    li {
      margin: 0 auto;

      a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        font-size: 1.2rem;

        &:hover {
          color: #ff4500;
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 2px;
`;

export const MovieLink = styled.li`
  list-style: none;
  text-align: center;
  margin-bottom: 20px;
`;

export const NavLinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  margin: 200px;
  &:hover {
    color: #ff4500;
  }
`;
