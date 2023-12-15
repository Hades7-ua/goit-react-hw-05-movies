import styled from 'styled-components';

export const ReviewsList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 20px;

    p {
      margin: 0;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #ddd;
      padding-bottom: 15px;
    }
  }
`;
