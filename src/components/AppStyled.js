import styled from 'styled-components';

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
  margin-top: 2;
`;
