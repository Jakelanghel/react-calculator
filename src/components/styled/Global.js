import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
  }

  body {
    font-family: 'Spartan', sans-serif;
    background-color: ${({ theme }) => theme.colors.mainBkg};
    margin: 0;
  }

  h1,
  h2,
  p {
    margin: 0;
    padding: 0;
  }
  

`;
