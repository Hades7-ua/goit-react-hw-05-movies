import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const CastListItem = styled.li`
  text-align: center;
`;

export const CastImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

export const CastInfo = styled.div`
  text-align: left;
`;

export const CastName = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CastCharacter = styled.p`
  color: #666;
  margin-bottom: 10px;
`;

// export const ActorInfo = styled.div`
//   margin-top: 10px;
// `;

// export const ActorRole = styled.p`
//   color: #888;
// `;


