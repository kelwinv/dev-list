import React, { useState } from "react";

import { GithubApi } from "../../server/api";

import { IUser } from "../User";
import { IUserGithub } from "../../components/UserGithub";

import { Container, Input, Button, EllipseIcon } from "./styles";

interface IInput {
  setUserstate?: React.Dispatch<React.SetStateAction<IUser[] | undefined>>;
  setUserGithub?: React.Dispatch<
    React.SetStateAction<IUserGithub[] | undefined>
  >;
  setAddNewUser?: React.Dispatch<
    React.SetStateAction<
      | {
          imageUrl: string;
          name: string;
          url: string;
        }
      | undefined
    >
  >;
  listType?: string;
  userList?: IUser[];
  firstUserList?: IUser[];
}

interface IGithubApi {
  items: {
    id: number;
    avatar_url: string;
    login: string;
    url: string;
  }[];
}

const UserInput: React.FC<IInput> = ({
  setUserstate,
  setUserGithub,
  listType,
  userList,
  firstUserList,
  setAddNewUser,
}) => {
  const [inputValue, setInputValue] = useState<string>();

  async function HandleGithubApi() {
    if (!setUserGithub || !setAddNewUser) return;
    const gitHubApi = await GithubApi.get<IGithubApi>(
      `/search/users?q=${inputValue}`
    );
    const response = gitHubApi.data.items.map((user) => ({
      id: user.id,
      imageUrl: user.avatar_url,
      name: user.login,
      url: user.url,
      setAddNewUser: setAddNewUser,
    }));
    console.log(response);
    setUserGithub(response);
  }

  function HandleSearch() {
    if (inputValue === "" || inputValue === undefined) {
      if (!setUserstate) return;
      return setUserstate(firstUserList);
    }

    if (listType === "github") {
      HandleGithubApi();
    }

    if (listType === "localUsers") {
      if (!setUserstate) return;

      if (userList && firstUserList) {
        const response: IUser[] = firstUserList.filter((user) => {
          const formatUser = user.name.toLocaleLowerCase();
          const formatInput = inputValue.toLocaleLowerCase();

          const response = formatUser.search(formatInput);
          if (response >= 0) return user.name;
          return undefined;
        });

        setUserstate(response);
      }
    }
  }

  return (
    <Container>
      <Input
        type="text"
        placeholder="pesquisa rapida"
        aria-label="pesquisa rapida"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={() => HandleSearch()} aria-label="Pesquisa">
        <EllipseIcon />
      </Button>
    </Container>
  );
};

export default UserInput;
