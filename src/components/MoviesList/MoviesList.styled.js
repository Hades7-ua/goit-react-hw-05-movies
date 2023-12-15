import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TrendingItem = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;
export const TrendingList = styled.li`
  margin-top: 24px;
  margin-bottom: 5px;
  margin-left: 50px;
  list-style: none;
  color: black;
  a {
    text-decoration: none;
    color: black;
    &:hover {
      color: #ff4500;
    }
  }
`;

export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: collumn;
  list-style: none;
  text-decoration: none;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const TitleMovieList = styled.h2`
  font-size: 18px;
`;
