import Head from "next/head";
import Typography from "../../src/components/typography";
import styled from "styled-components";
import { LandingPageButton } from "..";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
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
      <ProjectsContainer>
        <Typography type="h1">
          Atomically
          <br />
          Changing Everyday
        </Typography>
        <RowContainer>
          <Card>
            <Typography type="h3">Atlas</Typography>
            <hr style={{ width: "90%" }} />
            <CardContent>
              <Typography type="h4">🚧 Under Construction 🚧</Typography>
              <a href="https://atlas-endurance.vercel.app">
                <LandingPageButton>Check It Out!</LandingPageButton>
              </a>
            </CardContent>
          </Card>
          {/* <Card>
            <Typography type="h3">AtlasLog</Typography>
            <hr style={{ width: "90%" }} />
            <div className="child">
              <Typography type="h5">Text a;lsdkjf;laskdjf;lasjdf</Typography>
            </div>
          </Card>
          <Card>
            <Typography type="h3">AtlasTeam</Typography>
            <hr style={{ width: "90%" }} />
            <div className="child">
              <Typography type="h5">Text a;lsdkjf;laskdjf;lasjdf</Typography>
            </div>
          </Card>
          <Card>
            <Typography type="h3">HotSpot</Typography>
            <hr style={{ width: "90%" }} />
            <div className="child">
              <Typography type="h5">Text a;lsdkjf;laskdjf;lasjdf</Typography>
            </div>
          </Card>
          <Card>
            <Typography type="h3" style={{ width: "100%" }}>
              Givr
            </Typography>
            <hr style={{ width: "90%" }} />
            <div className="child">
              <Typography type="h5">Text a;lsdkjf;laskdjf;lasjdf</Typography>
            </div>
          </Card> */}
        </RowContainer>
      </ProjectsContainer>
    </>
  );
};

// styles
const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  margin-top: auto;
  margin-bottom: auto;
  height: 100vh;
  margin-top: 6rem;
  z-index: 1000;
  gap: 10px;
`;

const RowContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 1rem;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 1rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.text}};
  padding: 15px;
  border-radius: 15px;
  :hover {
    box-shadow: 1px 1px 0 2px ${({ theme }) => theme.text}};
    height: fit-content;
  }
  transition: all 0.5s ease-out;
`;

export default Projects;
