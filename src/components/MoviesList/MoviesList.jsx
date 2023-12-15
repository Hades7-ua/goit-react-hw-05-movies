import { Link, useLocation } from 'react-router-dom';
import {
  TrendingList,
  Image,
  TitleMovieList,
  TrendingItem,
  MovieLink,
} from './MoviesList.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <TrendingItem>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <TrendingList key={id}>
            <MovieLink>
              {' '}
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <Image
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w300${poster_path}`
                      : defaultImg
                  }
                  alt="poster"
                  width={250}
                />
                <TitleMovieList>{title}</TitleMovieList>
              </Link>
            </MovieLink>
          </TrendingList>
        );
      })}
    </TrendingItem>
  );
}
