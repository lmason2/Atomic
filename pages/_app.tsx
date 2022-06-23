import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "../theme/ThemeConfig";
import { Footer, LandingPageButton, NavBarContainer } from "./landing.styled";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <NavBarContainer>
        <Link href="/">
          <LandingPageButton>ATOMIC</LandingPageButton>
        </Link>
        <Link href="/aboutMe">
          <LandingPageButton>Me</LandingPageButton>
        </Link>
        <Link href="/projects">
          <LandingPageButton>Projects</LandingPageButton>
        </Link>
        <LandingPageButton onClick={toggleTheme}>
          {theme == "light" ? `Dark Mode` : `Light Mode`}
        </LandingPageButton>
      </NavBarContainer>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
