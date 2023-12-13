import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { fetchMovieDetails } from 'services/api';
import toast from 'react-hot-toast';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export default function MoviesDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesDetails, setMoviesDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    setIsLoading(true);
    if (!movieId) {
      return;
    }
    const fetchMoviesDetails = async () => {
      try {
        const response = await fetchMovieDetails(movieId);
        setMoviesDetails(response);
      } catch (error) {
        toast.error('Sorry, error movies details(');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesDetails();
  }, [movieId]);

  const goBackButton = useRef(location?.state?.from ?? '/');

  return (
    <div>
      {isLoading && <b>LOADING ...</b>}
      <Link to={goBackButton.current}>Go Back</Link>
      {moviesDetails && (
        <>
          <div>
            <img
              src={
                moviesDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w300${moviesDetails.poster_path}`
                  : defaultImg
              }
              alt=""
            />
            <div>
              <h2>{moviesDetails.original_title}</h2>
              <p>{moviesDetails.overview}</p>
              <ul>
                {moviesDetails.genres.map(({ id, name }) => {
                  return (
                    <li key={id}>
                      <p>{name}</p>
                    </li>
                  );
                })}
              </ul>
              <p>User Scope: {Math.round(moviesDetails.vote_average)}</p>
            </div>
          </div>
        </>
      )}
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
