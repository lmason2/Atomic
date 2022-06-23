import type { NextPage } from "next";
import Head from "next/head";
import Typography from "../src/components/typography";
import styled from "styled-components";

const Home: NextPage = (props: any) => {
  return (
    <div>
      <Head>
        <title>Atomic</title>
        <meta name="description" content="ATOMIC" />
        <link key={0} rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          key={1}
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          key={2}
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link key={3} rel="icon" href="/atomic.png" />
      </Head>
      <body>
        <MainContainer
          onClick={() => {
            props.setTheme("light");
          }}
        >
          <Typography type="h1">
            Welcome to<br></br>Atomic Development
          </Typography>
          <Typography type="h5">
            a·tom·ic - of or forming a single irreducible unit or component in a
            larger system.
          </Typography>
        </MainContainer>
        <Footer>
          <Typography type="footer">Created by Luke Mason</Typography>
        </Footer>
      </body>
    </div>
  );
};

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5vh;
  display: flex;
  flex: 1;
  padding: 1.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.text}};
  justify-content: center;
  align-items: center;
`;

export const NavBarContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 1.5rem 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.text}};
  background: ${({ theme }) => theme.body}};
  height: 5vh;
  gap: 1rem;
  justify-content: center;
`;

export const LandingPageButton = styled.button`
  background-color: ${({ theme }) => theme.body}};
  padding: 15px 20px;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text}};
  border-radius: 10px;
  font-family: ${({ theme }) => theme.font}};
  width: fit-content;
  height: fit-content;

  :hover {
    box-shadow: 1px 1px 0 2px ${({ theme }) => theme.text}};
    transition: all 0.5s ease-out;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-top: auto;
  margin-bottom: auto;
  height: 100%;
  gap: 1rem;
`;

export default Home;
