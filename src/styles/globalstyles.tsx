import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html, :root{
    height: 100vh;
    max-width: 100vw;
    width: 100%;
  }

  *,input,button{
    margin: 0;
    padding: 0;
    color: var(--secondary-color);
    font-family: 'Roboto', sans-serif;
  }


  :root{
    --primary-color: #F4F4F4;
    --secondary-color: #232323;
    --grey: #616161;
    --red: #F62248;
    --green: #226A59;
  }

`;
