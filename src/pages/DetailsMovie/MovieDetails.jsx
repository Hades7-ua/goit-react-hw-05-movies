import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { fetchMovieDetails } from 'services/api';
import toast from 'react-hot-toast';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router';
import {
  ContainerCard,
  ContentContainer,
  MovieLink,
  ImageCard,
  TitleMovie,
  Overview,
  OverviewList,
  OverviewItem,
  UserScope,
  DetailsContainer,
  TextContainer,
  AdditionalInfo,
  InfoLink,
  InfoList
} from './MovieDetails.styled';

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
    <ContainerCard>
      {isLoading && <b>LOADING ...</b>}
      <MovieLink>
        <Link to={goBackButton.current}>Go Back</Link>
      </MovieLink>

      {moviesDetails && (
        <DetailsContainer>
          <ContentContainer>
            <ImageCard
              src={
                moviesDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w300${moviesDetails.poster_path}`
                  : defaultImg
              }
              alt=""
            />
            <TextContainer>
              <TitleMovie>{moviesDetails.original_title}</TitleMovie>
              <Overview>{moviesDetails.overview}</Overview>
              <OverviewList>
                {moviesDetails.genres.map(({ id, name }) => {
                  return (
                    <OverviewItem key={id}>
                      <p>{name}</p>
                    </OverviewItem>
                  );
                })}
              </OverviewList>
              <UserScope>
                User Scope: {Math.round(moviesDetails.vote_average)}
              </UserScope>
            </TextContainer>
          </ContentContainer>
        </DetailsContainer>
      )}
      <AdditionalInfo>Additional information</AdditionalInfo>
      <InfoLink>
        <InfoList>
          <NavLink to="cast">Cast</NavLink>
        </InfoList>
        <InfoList>
          <NavLink to="reviews">Reviews</NavLink>
        </InfoList>
      </InfoLink>

      <Outlet />
    </ContainerCard>
  );
}
