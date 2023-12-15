import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import { useState, useEffect } from 'react';
import { ReviewsList } from './Reviews.styled';

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
    <ReviewsList>
      {reviewsList && reviewsList.length > 0 ? (
        reviewsList.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <li>No reviews yet</li>
      )}
    </ReviewsList>
  );
}
