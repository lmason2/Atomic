import { FC } from "react";
import Typography from "../../src/components/typography";
import { SmallKeyboardArrowRight } from "../../src/icons/icons.styled";
import {
  ColumnContainer,
  RowContainer,
  CustomList,
  CustomListItem,
} from "./aboutMe.styled";

interface ExperienceProps {
  experienceExpanded: boolean;
  setExperienceExpanded: any;
}

const Experience: FC<ExperienceProps> = ({
  experienceExpanded,
  setExperienceExpanded,
}) => {
  return (
    <ColumnContainer>
      <RowContainer>
        <Typography type="h3">Experience</Typography>
        <SmallKeyboardArrowRight
          expanded={experienceExpanded ? "true" : "false"}
          onClick={() => {
            setExperienceExpanded((e: any) => !e);
          }}
        />
      </RowContainer>
      <CustomList expanded={experienceExpanded}>
        <CustomListItem>Professional</CustomListItem>
        <CustomList expanded={experienceExpanded}>
          <CustomListItem>Mandolin (Intern turned part-time)</CustomListItem>
          <CustomList expanded={experienceExpanded}>
            <CustomListItem>Full-stack developer</CustomListItem>
            <CustomListItem>
              Created end-to-end Stripe integration with FAST API endpoints and
              front-end design for data
            </CustomListItem>
            <CustomListItem>
              Started as front-end intern using React
            </CustomListItem>
            <CustomListItem>
              Built out UX for recently released product Fan Navigator Segment
              Builder
            </CustomListItem>
            <CustomListItem>
              Bug fixes and UI updates to match Figma designs
            </CustomListItem>
          </CustomList>
        </CustomList>
        <CustomListItem>Personal Projects</CustomListItem>
        <CustomList expanded={experienceExpanded}>
          <CustomListItem>2 Deployed iOS Applications</CustomListItem>
          <CustomList expanded={experienceExpanded}>
            <CustomListItem>
              AtlasTeam: Cloud storage and authentication + user roles
            </CustomListItem>
            <CustomListItem>
              AtlasLog: Local storage self-contained application
            </CustomListItem>
          </CustomList>
          <CustomListItem>Freelance Charity Social Media</CustomListItem>
          <CustomList expanded={experienceExpanded}>
            <CustomListItem>
              Contracted to develop mobile application using Swift and
              Storyboards for Givr LLC
            </CustomListItem>
            <CustomListItem>More details available upon request</CustomListItem>
          </CustomList>
          <CustomListItem>Boeing Senior Project</CustomListItem>
          <CustomList expanded={experienceExpanded}>
            <CustomListItem>
              Full stack React application with a team of two other computer
              scientists at Gonzaga University
            </CustomListItem>
            <CustomListItem>Patent disclosure filed</CustomListItem>
          </CustomList>
        </CustomList>
        <CustomListItem>Internships</CustomListItem>
        <CustomList expanded={experienceExpanded}>
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
      </CustomList>
    </ColumnContainer>
  );
};

export default Experience;
