import styled from "styled-components";
import { AddDev, BemVindo, DevList, DragUp } from "../../assets/iconsSvg";
import BackGround from "../../assets/back-ground.svg";

export const Container = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;

  .DragContainer {
    position: absolute;
    width: 100%;
    min-height: 90vh;
  }
`;

export const WelcomeLetter = styled.div`
  height: 90vh;
  max-width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--secondary-color);

  top: -0vh;
`;

export const DragUpIcon = styled(DragUp)`
  position: absolute;
  bottom: -27px;
  right: 64px;
`;

export const BemvindoIcon = styled(BemVindo)`
  max-width: 50%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  height: 100vh;

  background: var(--primary-color) url(${BackGround}) no-repeat;
  background-size: contain;
  background-position: center;
  padding-top: 10vh;
`;

export const Titles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  text-align: center;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
    color: #616161;
    max-width: 60%;
  }
`;

export const BoxContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  max-width: 100%;
  max-height: 100%;

  width: min(max(25vh, 10rem), 288px);
  height: min(max(25vh, 10rem), 288px);

  background: #f8f8f8;
  box-shadow: 4px 3px 4px rgba(35, 35, 35, 0.2);
  border-radius: 12px;

  transition: 0.7s ease-in;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
  }

  &:hover {
    box-shadow: none;
    transform: translate(5px, 5px);
    opacity: 0.8;
  }
`;

export const DevListIcon = styled(DevList)`
  max-width: 90%;
  max-height: 90%;
`;

export const AddDevIcon = styled(AddDev)`
  max-width: 90%;
  max-height: 90%;
`;
