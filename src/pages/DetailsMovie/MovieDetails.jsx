import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchMovieDetails } from 'services/api';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router';

export default function MoviesDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesDetails, setMoviesDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (!movieId) {
      return;
    }
    const fetchMoviesDetails = async () => {
      try {
        const response = await fetchMovieDetails(movieId);
        setMoviesDetails(response.data);
      } catch (error) {
        toast.error('Sorry, error movies details(');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesDetails();
    console.log(fetchMoviesDetails());
  }, [movieId]);

  return (
    <div>
      {isLoading && <b>LOADING QUIZ...</b>}
      {/* {quiz && <h1>{quiz.topic}</h1>} */}

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
