import Head from "next/head";
import Typography from "../../src/components/typography";
import { Card, ProjectsContainer, RowContainer } from "./projects.styled";

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
          </Card>
        </RowContainer>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
