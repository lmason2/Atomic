import { FC, useState } from "react";
import Typography from "../../src/components/typography";
import { SmallKeyboardArrowRight } from "../../src/icons/icons.styled";
import {
  ColumnContainer,
  RowContainer,
  CustomList,
  CustomListItem,
} from "./aboutMe.styled";

interface EducationProps {
  educationExpanded: boolean;
  setEducationExpanded: any;
}

const Education: FC<EducationProps> = ({
  educationExpanded,
  setEducationExpanded,
}) => {
  return (
    <ColumnContainer>
      <RowContainer>
        <Typography type="h3">Education</Typography>
        <SmallKeyboardArrowRight
          expanded={educationExpanded ? "true" : "false"}
          onClick={() => {
            setEducationExpanded((e: any) => !e);
          }}
        />
      </RowContainer>
      <CustomList expanded={educationExpanded}>
        <CustomListItem>Arizona State University</CustomListItem>
        <CustomList expanded={educationExpanded}>
          <CustomListItem>Available for full-time January 2023</CustomListItem>
          <CustomListItem>Expected graduation May 2023</CustomListItem>
          <CustomListItem>M.S. Computer Science</CustomListItem>
          <CustomListItem>3.44 GPA</CustomListItem>
        </CustomList>
        <CustomListItem>Gonzaga University</CustomListItem>
        <CustomList expanded={educationExpanded}>
          <CustomListItem>Graduated May 2021</CustomListItem>
          <CustomListItem>B.S. Computer Science</CustomListItem>
          <CustomListItem>3.85 GPA</CustomListItem>
          <CustomListItem>
            2-Time nominee for underclassman math student of the year
          </CustomListItem>
        </CustomList>
      </CustomList>
    </ColumnContainer>
  );
};

export default Education;
