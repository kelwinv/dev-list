import React from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  ExitIcon,
  Contant,
  UserContainer,
  About,
  Header,
  Name,
  RepoNumber,
  AboutText,
  ReposContainer,
  TopText,
  BookIcon,
  Repositories,
  Repositorie,
  Language,
  Stars,
  StarIcon,
  TextsRepo,
  EndRepo,
} from "./styles";

const UserAbout: React.FC = () => {
  const route = useHistory();
  

  return (
    <Container>
      <Contant>
        <button onClick={() => route.goBack()}>
          <ExitIcon />
        </button>
        <UserContainer>
          <img
            src="https://cdn.pixabay.com/photo/2015/01/12/10/45/man-597178__340.jpg"
            alt="imagem do {nome}"
          />
          <About>
            <Header>
              <Name>Igor92</Name>
              <RepoNumber>Repositorios: 19</RepoNumber>
            </Header>
            <AboutText>
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
            </AboutText>
          </About>
        </UserContainer>
        <ReposContainer>
          <TopText>
            <BookIcon />
            REPOSITORIOS
          </TopText>
          <Repositories>
            <Repositorie>
              <TextsRepo>
                <h1>randomizador-de-texto</h1>
                <p>
                  um programa que pega seu texto/palavra embaralha e retorna
                  todas as possibilidades de embaralho
                </p>
              </TextsRepo>
              <a href="https://github.com/kelwinv/chat-com-socket.io">
                https://github.com/kelwinv/chat-com-socket.io
              </a>
              <EndRepo>
                <Language>CSS</Language>
                <Stars>
                  <StarIcon />2
                </Stars>
              </EndRepo>
            </Repositorie>
            <Repositorie>
              <TextsRepo>
                <h1>randomizador-de-texto</h1>
                <p>
                  um programa que pega seu texto/palavra embaralha e retorna
                  todas as possibilidades de embaralho
                </p>
              </TextsRepo>
              <a href="https://github.com/kelwinv/chat-com-socket.io">
                https://github.com/kelwinv/chat-com-socket.io
              </a>
              <EndRepo>
                <Language>CSS</Language>
                <Stars>
                  <StarIcon />2
                </Stars>
              </EndRepo>
            </Repositorie>
            <Repositorie>
              <TextsRepo>
                <h1>randomizador-de-texto</h1>
                <p>
                  um programa que pega seu texto/palavra embaralha e retorna
                  todas as possibilidades de embaralho
                </p>
              </TextsRepo>
              <a href="https://github.com/kelwinv/chat-com-socket.io">
                https://github.com/kelwinv/chat-com-socket.io
              </a>
              <EndRepo>
                <Language>CSS</Language>
                <Stars>
                  <StarIcon />2
                </Stars>
              </EndRepo>
            </Repositorie>
            <Repositorie>
              <TextsRepo>
                <h1>randomizador-de-texto</h1>
                <p>
                  um programa que pega seu texto/palavra embaralha e retorna
                  todas as possibilidades de embaralho
                </p>
              </TextsRepo>
              <a href="https://github.com/kelwinv/chat-com-socket.io">
                https://github.com/kelwinv/chat-com-socket.io
              </a>
              <EndRepo>
                <Language>CSS</Language>
                <Stars>
                  <StarIcon />2
                </Stars>
              </EndRepo>
            </Repositorie>
          </Repositories>
        </ReposContainer>
      </Contant>
    </Container>
  );
};

export default UserAbout;
