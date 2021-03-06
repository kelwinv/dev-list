import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  box-shadow: 3px 3px 12px 1px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border-radius: 3px;

  @media (min-width: 1041px) {
    display: grid;
    grid-template-columns: 138px 2fr;
    grid-template-rows: 100%;

    gap: 20px;

    background: #ffffff;

    height: 125px;
  }
`;

export const Image = styled.div`
  > img {
    max-width: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;

  @media (min-width: 1041px) {
    flex-direction: initial;
    justify-content: space-between;
    margin: initial;
    padding-bottom: 0;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  text-align: center;

  margin: 5px auto 12px;
  gap: 5px;

  @media (min-width: 1041px) {
    width: 70%;
    height: 60%;
    max-height: initial;
    align-items: initial;
    text-align: initial;
    gap: 0;

    justify-content: space-between;
  }
`;

export const Name = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const MoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 64px;
  width: 80%;
`;

export const MoreButton = styled.div`
  display: flex;
  justify-content: center;

  background: var(--green);
  border-radius: 5px;

  width: 100%;
  height: 50px;
  text-align: center;

  button {
    background: none;
    border: none;
    width: 100%;
    height: 100%;
    color: var(--primary-color);
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
  }

  @media (min-width: 1041px) {
    width: 80%;
    height: 100%;
  }
`;
