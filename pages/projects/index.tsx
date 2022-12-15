import Head from "next/head";
import Typography from "../../src/components/typography";
import { LandingPageButton } from "../main.styled";
import {
  ProjectsContainer,
  RowContainer,
  Card,
  CardContent,
} from "./projects.styled";

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
            <Typography type="h3">AtlasLog</Typography>
            <hr style={{ width: "90%" }} />
            <CardContent>
              <a href="https://apps.apple.com/us/app/atlaslog/id1606260069">
                <LandingPageButton>Check It Out!</LandingPageButton>
              </a>
            </CardContent>
          </Card>
          <Card>
            <Typography type="h3">AtlasTeam</Typography>
            <hr style={{ width: "90%" }} />
            <CardContent>
              <a href="https://apps.apple.com/us/app/atlasteam/id1609647405">
                <LandingPageButton>Check It Out!</LandingPageButton>
              </a>
            </CardContent>
          </Card>
          <Card>
            <Typography type="h3">GroShare</Typography>
            <hr style={{ width: "90%" }} />
            <CardContent>
              <Typography type="h4">🚧 In Progress 🚧</Typography>
              <Typography type="h5">
                Native and Web application using React Native and ReactJs
              </Typography>
              <Typography type="h5">Details available upon request</Typography>
            </CardContent>
          </Card>
        </RowContainer>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
