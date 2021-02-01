import styled, { css } from "styled-components";
import { ArrowLeft, RepoSvg, StarSVG } from "../../assets/iconsSvg";

const ScollCss = css`
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
    border-radius: 20px;
    border: 3px solid var(--primary-color);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.7);
`;

export const Contant = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 90%;
  min-height: 60%;
  max-height: 90%;

  padding: 2rem 0;

  background: var(--primary-color);
  border-radius: 14px;

  overflow-y: auto;

  @media (min-width: 480px) {
    ${ScollCss}
  }

  > button {
    border: none;
    background: none;
    align-self: flex-start;
    cursor: pointer;
  }
`;

export const ExitIcon = styled(ArrowLeft)`
  height: 32px;
  align-self: flex-start;
`;

export const UserContainer = styled.div`
  width: 80%;
  height: 50%;
  margin-bottom: 1.5rem;

  > img {
    justify-self: center;
    max-width: min(100%, 300px);
    border-radius: 6px;
  }

  @media (min-width: 850px) {
    display: flex;
    width: 90%;
  }
`;

export const About = styled.div`
  width: 100%;

  @media (min-width: 850px) {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
  }
`;

export const Header = styled.div`
  margin-bottom: 10px;

  @media (min-width: 850px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Name = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const RepoNumber = styled.div`
  font-weight: bold;
`;

export const AboutText = styled.div`
  color: var(--grey);
`;

export const ReposContainer = styled.div`
  max-width: 100%;
`;

export const TopText = styled.div`
  display: flex;
  align-items: center;

  padding-left: 20px;
  gap: 6px;
`;

export const BookIcon = styled(RepoSvg)``;

export const Repositories = styled.div`
  display: flex;
  max-width: 100%;

  gap: 20px;
  padding: 20px;

  overflow-y: auto;
  ${ScollCss}
`;

export const Repositorie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 270px;

  background: var(--primary-color);

  box-shadow: 2px 2px 3px 2px rgba(35, 35, 35, 0.2);
  border-radius: 6px;
  padding: 20px 12px 6px;
`;

export const TextsRepo = styled.div`
  display: grid;
  gap: 5px;

  h1 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p {
    color: var(--grey);
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const EndRepo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Language = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
`;

export const Stars = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
`;

export const StarIcon = styled(StarSVG)``;
