import { fetchTrendMovies } from 'services/api';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Spinner from 'components/Loader/Spinner';
import { HomePageContainer, TitleHomePage } from '../Home/HomePage.styled';
import MoviesList from 'components/MoviesList/MoviesList';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchMovies = async () => {
      try {
        const response = await fetchTrendMovies();
        setMovies(response.results ?? []);
      } catch (error) {
        toast.error('Sorry, no movies found');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <HomePageContainer>
      <TitleHomePage>Trending today</TitleHomePage>
      <MoviesList movies={movies} />
      {isLoading && <Spinner />}
    </HomePageContainer>
  );
}
