import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.8);
`;

export const Main = styled.div`
  width: min(745px, 90vw);
  min-height: 214px;
  border-radius: 11px;
  margin: auto;
  background: var(--primary-color);
  padding: 2rem;

  img {
    max-width: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  @media (min-width: 800px) {
    display: flex;
    max-height: 300px;

    img {
      max-width: 45%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  text-align: center;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 800px) {
    margin: auto 1rem;
  }
`;

export const Button = styled.button`
  border: none;
  width: 45%;

  height: 44px;
  background: var(--green);
  border-radius: 5px;

  font-weight: bold;
  font-size: 1rem;
  color: #ffffff;

  cursor: pointer;

  &.cancel {
    background: var(--red);
  }

  @media (min-width: 800px) {
    font-size: 1.5rem;
  }
`;
