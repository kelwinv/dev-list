import styled from "styled-components";
import { ArrowLeft } from "../../assets/iconsSvg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  min-height: 100vh;
  gap: 15rem;
  padding-bottom: 2rem;

  > a {
    align-self: flex-start;
    margin: 42px 0 0 42px;
  }
`;

export const ArrowLeftIcon = styled(ArrowLeft)``;

export const Main = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  width: 100%;
  gap: 3rem;
`;
