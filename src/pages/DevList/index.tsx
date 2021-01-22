import React, { useEffect, useState } from "react";

import UserInput from "../../components/UserInput";
import UserList from "../../components/UserList";
import User, { IUser } from "../../components/User";

import { Container, ArrowLeftIcon, Main } from "./styles";
import { Link } from "react-router-dom";

const DevList: React.FC = () => {
  const [userList, setUserList] = useState<IUser[]>();
  const [firstUserList, setFirstUserList] = useState<IUser[]>();

  useEffect(() => {
    const data = [
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/01/12/10/45/man-597178__340.jpg",
        name: "Julho",
        about:
          "Aqui vai parte da bio, e se ficar mt grande fica assim como na ilustração",
        repo: 36,
        id: 123,
      },

      {
        imageUrl:
          "https://pixabay.com/pt/photos/m%C3%A9dico-homem-sorriso-sorrindo-5871743/",
        name: "Cleber",
        about:
          "Aqui vai parte da bio, e se ficar mt grande fica assim como na ilustração",
        repo: 110,
        id: 123,
      },

      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/05/31/15/14/woman-792162__340.jpg",
        name: "Amanda",
        about:
          "Aqui vai parte da bio, e se ficar mt grande fica assim como na ilustração",
        repo: 10,
        id: 123,
      },
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/05/31/15/14/woman-792162__340.jpg",
        name: "ana",
        about:
          "Aqui vai parte da bio, e se ficar mt grande fica assim como na ilustração",
        repo: 10,
        id: 123,
      },
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/01/12/10/45/man-597178__340.jpg",
        name: "coelho",
        about:
          "Aqui vai parte da bio, e se ficar mt grande fica assim como na ilustração",
        repo: 36,
        id: 123,
      },
    ];
    setUserList(data);
    setFirstUserList(data);
  }, []);

  return (
    <Container>
      <Link to="/">
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
