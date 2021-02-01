import React, { useEffect, useState } from "react";

import UserInput from "../../components/UserInput";
import UserList from "../../components/UserList";
import User, { IUser } from "../../components/User";

import { Container, ArrowLeftIcon, Main } from "./styles";
import { Link } from "react-router-dom";
import { api } from "../../server/api";

interface UserApi {
  id: number;
  login: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
}

const DevList: React.FC = () => {
  const [userList, setUserList] = useState<IUser[]>();
  const [firstUserList, setFirstUserList] = useState<IUser[]>();

  useEffect(() => {
    api.get<UserApi[]>("/users").then((res) => {
      const users = res.data;
      const data = users.map((user) => ({
        imageUrl: user.avatar_url,
        name: user.login,
        about: user.bio,
        repo: user.public_repos,
        id: user.id,
      }));
      setUserList(data);
      setFirstUserList(data);
    });
  }, []);

  return (
    <Container>
      <Link to="/" aria-label="voltar">
        <ArrowLeftIcon />
      </Link>
      <Main>
        <UserInput
          setUserstate={setUserList}
          listType="localUsers"
          userList={userList}
          firstUserList={firstUserList}
        />
        <UserList>
          {userList?.map((user) => (
            <User
              key={user.id}
              id={user.id}
              imageUrl={user.imageUrl}
              name={user.name}
              about={user.about}
              repo={user.repo}
            />
          ))}
        </UserList>
      </Main>
    </Container>
  );
};

export default DevList;
