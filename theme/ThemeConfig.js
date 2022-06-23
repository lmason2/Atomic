import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#F9F2ED",
  text: "#1363DF",
  basic: "black",
  font: `'Raleway', sans-serif`,
};

export const darkTheme = {
  body: "#06283D",
  text: "#47B5FF",
  basic: "white",
  font: `'Raleway', sans-serif`,
};

export const GlobalStyles = createGlobalStyle`
    body {
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      font-family: 'Raleway', sans-serif;
      transition: all 0.50s linear;
      height: 100vh;
      margin: 0px;
      display: flex;
      flex-direction: column;
    }
  `;
