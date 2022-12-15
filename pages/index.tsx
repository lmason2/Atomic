import type { NextPage } from "next";
import Head from "next/head";
import Typography from "../src/components/typography";
import { MainContainer, Footer, ContentContainer } from "./main.styled";

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
      <ContentContainer>
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
      </ContentContainer>
    </div>
  );
};

export default Home;
