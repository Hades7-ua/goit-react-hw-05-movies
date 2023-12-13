import SearchForm from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSearchMovies } from '../../services/api';
import toast from 'react-hot-toast';
import MoviesList from 'components/MoviesList/MoviesList';
import Spinner from 'components/Loader/Spinner';

export default function MoviesPage({ movieId }) {
  const [search, setSearch] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const onSearch = query => {
    setSearch({ query });
  };
  useEffect(() => {
    const query = search.get('query');
    if (!query) {
      return;
    }
    const fetchMovies = async () => {
      try {
        const response = await fetchSearchMovies(query);
        setMovies(response.results);
      } catch (error) {
        toast.error('Sorry, no movies found');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [search]);

  return (
    <div>
      {' '}
      <SearchForm onSearch={onSearch} /> <MoviesList movies={movies} />
      {isLoading && <Spinner />}
    </div>
  );
}
