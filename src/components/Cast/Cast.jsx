import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/api';
import {
  CastList,
  CastListItem,
  CastImage,
  CastInfo,
  CastName,
  CastCharacter,
} from './Cast.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export default function Cast() {
  const { movieId } = useParams();
  const [castList, setCastList] = useState(null);

  useEffect(() => {
    const getCredits = async () => {
      try {
        const response = await fetchMovieCredits(movieId);
        setCastList(response.cast);
      } catch (error) {}
    };
    getCredits();
  }, [movieId]);

  return (
    <CastList>
      {castList && castList.length > 0 ? (
        castList.map(({ name, id, character, profile_path }) => (
          <CastListItem key={id}>
            <CastImage
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : defaultImg
              }
              alt={name}
            />
            <CastInfo>
              <CastName>{name}</CastName>
              <CastCharacter>{character}</CastCharacter>
            </CastInfo>
          </CastListItem>
        ))
      ) : (
        <li>No cast information available</li>
      )}
    </CastList>
  );
}
