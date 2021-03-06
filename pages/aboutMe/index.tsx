import Typography from "../../src/components/typography";
import Head from "next/head";
import styled from "styled-components";
import { SmallKeyboardArrowRight } from "../../src/icons/icons.styled";
import { useState } from "react";
import Social from "../../src/components/social";

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
          <ColumnContainer>
            <RowContainer>
              <Typography type="h3">Education</Typography>
              <SmallKeyboardArrowRight
                expanded={educationExpanded ? "true" : "false"}
                onClick={() => {
                  setEducationExpanded((e) => !e);
                }}
              />
            </RowContainer>
            <CustomList expanded={educationExpanded}>
              <CustomListItem>Gonzaga University</CustomListItem>
              <CustomList expanded={educationExpanded}>
                <CustomListItem>Graduated May 2021</CustomListItem>
                <CustomListItem>B.S. Computer Science</CustomListItem>
                <CustomListItem>3.85 GPA</CustomListItem>
                <CustomListItem>
                  2-Time nominee for underclassman math student of the year
                </CustomListItem>
              </CustomList>
              <CustomListItem>Arizona State University</CustomListItem>
              <CustomList expanded={educationExpanded}>
                <CustomListItem>Expected graduation May 2023</CustomListItem>
                <CustomListItem>M.S. Computer Science</CustomListItem>
                <CustomListItem>3.33 GPA</CustomListItem>
              </CustomList>
            </CustomList>
          </ColumnContainer>
          <StyledHR expanded={educationExpanded || experienceExpanded} />
          <ColumnContainer>
            <RowContainer>
              <Typography type="h3">Experience</Typography>
              <SmallKeyboardArrowRight
                expanded={experienceExpanded ? "true" : "false"}
                onClick={() => {
                  setExperienceExpanded((e) => !e);
                }}
              />
            </RowContainer>
            <CustomList expanded={experienceExpanded}>
              <CustomListItem>Internships</CustomListItem>
              <CustomList expanded={experienceExpanded}>
                <CustomListItem>Mandolin (Summer 2022)</CustomListItem>
                <CustomList expanded={experienceExpanded}>
                  <CustomListItem>React Developer</CustomListItem>
                  <CustomListItem>
                    Deployed production code using React + Typescript on NextJS
                  </CustomListItem>
                  <CustomListItem>
                    Aided in bug fixes and testing
                  </CustomListItem>
                </CustomList>
                <CustomListItem>DriveTime (Summer 2021)</CustomListItem>
                <CustomList expanded={experienceExpanded}>
                  <CustomListItem>Data Scientist</CustomListItem>
                  <CustomListItem>
                    Deployed fully functional predictive model at 0.9 AUC.
                    <br />
                    Predicts income based on bank transaction data
                  </CustomListItem>
                  <CustomListItem>
                    Python with Azure ML and Azure DevOps
                  </CustomListItem>
                </CustomList>
              </CustomList>
              <CustomListItem>Personal Projects</CustomListItem>
              <CustomList expanded={experienceExpanded}>
                <CustomListItem>2 Deployed iOS Applications</CustomListItem>
                <CustomList expanded={experienceExpanded}>
                  <CustomListItem>AtlasTeam & AtlasLog</CustomListItem>
                  <CustomListItem>
                    AtlasTeam: Cloud storage and authentication + user roles
                  </CustomListItem>
                  <CustomListItem>
                    AtlasLog: Local storage self-contained application
                  </CustomListItem>
                </CustomList>
                <CustomListItem>Boeing Senior Project</CustomListItem>
                <CustomList expanded={experienceExpanded}>
                  <CustomListItem>
                    Full stack React application with a team of two other
                    computer scientists at Gonzaga University
                  </CustomListItem>
                  <CustomListItem>Patent disclosure filed</CustomListItem>
                </CustomList>
              </CustomList>
            </CustomList>
          </ColumnContainer>
          <StyledHR expanded={experienceExpanded || passionExpanded} />
          <ColumnContainer>
            <RowContainer>
              <Typography type="h3">Passion</Typography>
              <SmallKeyboardArrowRight
                expanded={passionExpanded ? "true" : "false"}
                onClick={() => {
                  setPassionExpanded((e) => !e);
                }}
              />
            </RowContainer>
            <CustomList expanded={passionExpanded}>
              <CustomListItem>Distance Running</CustomListItem>
              <CustomList expanded={passionExpanded}>
                <CustomListItem>High School & Collegiately</CustomListItem>
                <CustomListItem>
                  Team capatain at Gonzaga University
                </CustomListItem>
                <CustomListItem>
                  Emphasis on improvement and daily effort over results
                </CustomListItem>
              </CustomList>
              <StyledImage src="/running.jpg" />
              <CustomListItem>Outdoors</CustomListItem>
              <CustomList expanded={passionExpanded}>
                <CustomListItem>National Park Enthusiast</CustomListItem>
                <CustomList expanded={passionExpanded}>
                  <CustomListItem>Grand Canyon NP</CustomListItem>
                  <CustomListItem>Glacier NP</CustomListItem>
                  <CustomListItem>Grand Tetons NP</CustomListItem>
                  <CustomListItem>Yellowstone NP</CustomListItem>
                  <CustomListItem>Zion NP</CustomListItem>
                </CustomList>
                <StyledImage src="/moose.jpg" />
                <CustomListItem>Adventurer</CustomListItem>
                <CustomList expanded={passionExpanded}>
                  <CustomListItem>Cliff Jumping</CustomListItem>
                  <CustomListItem>Sky Diving</CustomListItem>
                  <CustomListItem>Traveler</CustomListItem>
                </CustomList>
                <StyledImage src="/balloon.jpg" />
              </CustomList>
            </CustomList>
          </ColumnContainer>
        </RowContainer>
      </AboutMeContainer>
    </>
  );
};

// styles

const AboutMeContainer = styled.div`
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
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  margin: 10px;
  gap: 10px;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`;

const CustomList = styled.ul<{ expanded: boolean }>`
  margin: auto;
  opacity: ${(props) => (props.expanded ? `` : `0`)};
  visibility: ${(props) => (props.expanded ? `` : `hidden`)};
  height: ${(props) => (props.expanded ? `` : `0px`)};
  transition: all 0.25s linear;
`;

const CustomListItem = styled.li`
  margin: 10px 0;
  color: ${(props) => props.theme.basic};
  list-style-type: upper-roman;
`;

const StyledHR = styled.hr<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? `100%` : `40px`)};
  transition: all 0.25s linear;
`;

export const StyledImage = styled.img<{ src: string }>`
  src: ${(props) => props.src};
  height: 40px;
  width: auto;
  transition: all 0.25s linear;
  margin: 0px 10px;
  :hover {
    height: 300px;
  }
`;

export default AboutMe;
