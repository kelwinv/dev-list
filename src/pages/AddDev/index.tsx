import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewUserContainer from "../../components/NewUserContainer";

import UserGithub, { IUserGithub } from "../../components/UserGithub";
import UserInput from "../../components/UserInput";
import UserList from "../../components/UserList";

import { Container, ArrowLeftIcon, Main } from "./styles";

const AddDev: React.FC = () => {
  const [userList, setUserList] = useState<IUserGithub[]>();
  const [addNewUser, setAddNewUser] = useState<{
    imageUrl: string;
    name: string;
    url: string;
  }>();

  return (
    <Container>
      {addNewUser && (
        <NewUserContainer
          imageUrl={addNewUser.imageUrl}
          name={addNewUser.name}
          url={addNewUser.url}
        />
      )}
      <Link to="/">
        <ArrowLeftIcon />
      </Link>
      <Main>
        <h1>Busque seu nome no github</h1>
        <UserInput
          setUserGithub={setUserList}
          setAddNewUser={setAddNewUser}
          listType="github"
        />
        <UserList>
          {userList?.map((user) => (
            <UserGithub
              key={user.id}
              id={user.id}
              imageUrl={user.imageUrl}
              name={user.name}
              url={user.url}
              setAddNewUser={setAddNewUser}
            />
          ))}
        </UserList>
      </Main>
    </Container>
  );
};

export default AddDev;
