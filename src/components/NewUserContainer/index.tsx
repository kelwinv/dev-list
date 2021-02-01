import React from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../server/api";

import { Container, Main, Content, Buttons, Button } from "./styles";

interface INewUser {
  imageUrl: string;
  name: string;
  url: string;
}

const NewUserContainer: React.FC<INewUser> = ({ imageUrl, name, url }) => {
  const route = useHistory();

  async function HandleAddNewUser() {
    const response = await api.post('/users',{url});
    console.log(response);
    route.goBack();
  }

  return (
    <Container>
      <Main>
        <img src={imageUrl} alt={name} />
        <Content>
          <h1>{name}</h1>
          <Buttons>
            <Button onClick={() => route.goBack()} className="cancel">
              CANCELAR
            </Button>
            <Button onClick={HandleAddNewUser}>ADICIONAR</Button>
          </Buttons>
        </Content>
      </Main>
    </Container>
  );
};

export default NewUserContainer;
