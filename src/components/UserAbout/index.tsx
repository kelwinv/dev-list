import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { api } from "../../server/api";

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

interface IRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
}

interface IUser {
  id: number;
  login: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  repos: IRepo[];
}

const UserAbout: React.FC = () => {
  const [user, setUser] = useState<IUser>();
  const route = useHistory();
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    api.get<IUser>(`/users/${id}`).then(({ data }) => {
      setUser(data);
    });
  }, [id]);
  return (
    <Container>
      <Contant>
        <button onClick={() => route.goBack()}>
          <ExitIcon />
        </button>
        {user && (
          <>
            <UserContainer>
              <img src={user.avatar_url} alt="imagem de perfil" />
              <About>
                <Header>
                  <Name>{user.login}</Name>
                  <RepoNumber>Repositorios:{user.public_repos}</RepoNumber>
                </Header>
                <AboutText>{user.bio}</AboutText>
              </About>
            </UserContainer>

            <ReposContainer>
              <TopText>
                <BookIcon />
                REPOSITORIOS
              </TopText>
              <Repositories>
                {user.repos.map((repo) => (
                  <Repositorie key={repo.id}>
                    <TextsRepo>
                      <h1>{repo.name}</h1>
                      <p>
                        {repo.description}
                      </p>
                    </TextsRepo>
                    <a href={repo.html_url}>
                      Veja o repositorio no Github!
                    </a>
                    <EndRepo>
                      <Language>{repo.language}</Language>
                      <Stars>
                        <StarIcon />
                        <span>{repo.stargazers_count}</span>
                      </Stars>
                    </EndRepo>
                  </Repositorie>
                ))}
              </Repositories>
            </ReposContainer>
          </>
        )}
      </Contant>
    </Container>
  );
};

export default UserAbout;
