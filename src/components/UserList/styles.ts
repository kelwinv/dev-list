import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 2rem;

  grid-template-columns: 1fr 1fr;

  width: min(90%,1225px);
  max-height: 80vh;

  overflow-y: auto;

  padding: 2.4%;

  @media (min-width: 1041px) {
    grid-template-columns: 1fr;

  }
`;
