// import { fetchTrendMovies,fetchSearchMovies,fetchMovieDetails } from "services/api";
// import CastPage from 'pages/CastPage';
import HomePage from '../pages/Home/HomePage';
import MoviesDetailsPage from 'pages/DetailsMovie/MovieDetails';
import MoviesPage from 'pages/MoviePage/MoviesPage';
import NotFoundPage from 'pages/NotFound/NotFoundPage';

// import ReviewsPage from 'pages/ReviewsPage';
import { Routes, Route, NavLink } from 'react-router-dom';
export const App = () => {
  // console.log(fetchTrendMovies())
  // console.log(fetchSearchMovies())
  // console.log(fetchMovieDetails())

  return (
    <>
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                {' '}
                <NavLink to="/movies">Movies</NavLink>
              </li>
              <li>
                <NavLink to="/movies/:movieId">Details</NavLink>
              </li>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MoviesDetailsPage />}>
              {/* <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} /> */}
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
