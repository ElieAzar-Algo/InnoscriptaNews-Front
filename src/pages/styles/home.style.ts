import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: calc(33.33% - 16px); /* Three cards per row with some spacing */
  margin: 8px;

  @media (max-width: 768px) {
    width: 100%; /* One card per row on mobile screens */
  }
`
