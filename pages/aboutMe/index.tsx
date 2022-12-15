import Typography from "../../src/components/typography";
import Head from "next/head";
import { useState } from "react";
import Social from "../../src/components/social";
import Education from "./education";
import { AboutMeContainer, RowContainer, StyledHR } from "./aboutMe.styled";
import Experience from "./experience";
import Passion from "./passion";

const AboutMe = () => {
  const [educationExpanded, setEducationExpanded] = useState(false);
  const [experienceExpanded, setExperienceExpanded] = useState(false);
  const [passionExpanded, setPassionExpanded] = useState(false);

  return (
    <>
      <Head>
        <title>Luke Mason</title>
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
      <AboutMeContainer>
        <Typography type="h1">Luke Mason</Typography>
        <Typography>Full Stack React Developer</Typography>
        <Social />
        <RowContainer>
          <Education
            educationExpanded={educationExpanded}
            setEducationExpanded={setEducationExpanded}
          />
          <StyledHR expanded={educationExpanded || experienceExpanded} />
          <Experience
            experienceExpanded={experienceExpanded}
            setExperienceExpanded={setExperienceExpanded}
          />
          <StyledHR expanded={experienceExpanded || passionExpanded} />
          <Passion
            passionExpanded={passionExpanded}
            setPassionExpanded={setPassionExpanded}
          />
        </RowContainer>
      </AboutMeContainer>
    </>
  );
};

export default AboutMe;
