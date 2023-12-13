import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import { useState, useEffect } from 'react';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviewsList, setReviewsList] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      const response = await fetchMovieReviews(movieId);
      setReviewsList(response.results);
    };
    getReviews();
  }, [movieId]);

  return (
    <ul>
      {reviewsList &&
        reviewsList.map(({ id, author, content }) => {
          return (
            <li key={id}>
              {' '}
              <p>{author}</p>
              <p>{content}</p>
            </li>
          );
        })}
    </ul>
  );
}
