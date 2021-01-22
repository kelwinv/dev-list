import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Image,
  Main,
  NameContainer,
  MoreContainer,
  Name,
  Bio,
  Repo,
  MoreButton,
} from "./styles";

export interface IUser {
  id: number;
  imageUrl: string;
  name: string;
  about: string;
  repo: number;
}

const User: React.FC<IUser> = ({ imageUrl, name, about, repo, id }) => {
  return (
    <Container>
      <Image>
        <img src={imageUrl} alt={name} />
      </Image>
      <Main>
        <NameContainer>
          <Name>{name}</Name>
          <Bio>{about}</Bio>
        </NameContainer>
        <MoreContainer>
          <Repo>Repositorios:{repo}</Repo>
          <MoreButton>
            <Link to={`devList/user/${id}`}>VER MAIS</Link>
          </MoreButton>
        </MoreContainer>
      </Main>
    </Container>
  );
};

export default User;
