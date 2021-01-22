import React from "react";

import {
  Container,
  Image,
  Main,
  NameContainer,
  MoreContainer,
  Name,
  MoreButton,
} from "./styles";

export interface IUserGithub {
  id: number;
  imageUrl: string;
  name: string;
  url: string;
  setAddNewUser: React.Dispatch<
    React.SetStateAction<
      | {
          imageUrl: string;
          name: string;
          url: string;
        }
      | undefined
    >
  >;
}

const UserGithub: React.FC<IUserGithub> = ({
  imageUrl,
  name,
  url,
  setAddNewUser,
}) => {
  return (
    <Container>
      <Image>
        <img src={imageUrl} alt={name} />
      </Image>
      <Main>
        <NameContainer>
          <Name>{name}</Name>
        </NameContainer>
        <MoreContainer>
          <MoreButton>
            <button onClick={() => setAddNewUser({ name, url, imageUrl })}>
              Adicionar usuario
            </button>
          </MoreButton>
        </MoreContainer>
      </Main>
    </Container>
  );
};

export default UserGithub;
