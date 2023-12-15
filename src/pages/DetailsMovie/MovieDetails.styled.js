import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerCard = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;
export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
`;
export const DetailsContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
`;
export const TextContainer = styled.div`
  margin-left: 32px;
`;
export const MovieLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  display: inline-block;
  padding: 6px 12px;
  background-color: #007bff;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4500;
  }
`;

export const ImageCard = styled.img`
   {
    width: 300px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    margin-right: 20px;
  }
`;

export const TitleMovie = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Overview = styled.p`
  margin-bottom: 10px;
`;

export const OverviewList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 8px;
`;

export const OverviewItem = styled.li`
  margin-bottom: 20px;
`;

export const UserScope = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const AdditionalInfo = styled.p`
  font-size: 24px;
  margin-top: 20px;
`;

export const InfoLink = styled.ul`
  list-style: none;
  text-decoration: none;
  padding: 8px;
  margin-bottom: 8px;
`;

export const InfoList = styled.li`
  font-size: 18px;
  list-style: none;
  text-decoration: none;
  padding: 0;
  margin-bottom: 8px;
`;
// export const LoadingText = styled.b`
//   font-size: 18px;
// `;
