import { FC } from "react";
import Typography from "../../src/components/typography";
import { SmallKeyboardArrowRight } from "../../src/icons/icons.styled";
import {
  ColumnContainer,
  RowContainer,
  CustomList,
  CustomListItem,
  StyledImage,
} from "./aboutMe.styled";

interface PassionProps {
  passionExpanded: boolean;
  setPassionExpanded: any;
}

const Passion: FC<PassionProps> = ({ passionExpanded, setPassionExpanded }) => {
  return (
    <ColumnContainer>
      <RowContainer>
        <Typography type="h3">Passion</Typography>
        <SmallKeyboardArrowRight
          expanded={passionExpanded ? "true" : "false"}
          onClick={() => {
            setPassionExpanded((e: any) => !e);
          }}
        />
      </RowContainer>
      <CustomList expanded={passionExpanded}>
        <CustomListItem>Distance Running</CustomListItem>
        <CustomList expanded={passionExpanded}>
          <CustomListItem>High School & Collegiately</CustomListItem>
          <CustomListItem>Team capatain at Gonzaga University</CustomListItem>
          <CustomListItem>
            Emphasis on improvement and daily effort over results
          </CustomListItem>
        </CustomList>
        <StyledImage src="/images/running.jpg" />
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
          <StyledImage src="/images/moose.jpg" />
          <CustomListItem>Adventurer</CustomListItem>
          <CustomList expanded={passionExpanded}>
            <CustomListItem>Cliff Jumping</CustomListItem>
            <CustomListItem>Sky Diving</CustomListItem>
            <CustomListItem>Traveler</CustomListItem>
          </CustomList>
          <StyledImage src="/images/balloon.jpg" />
        </CustomList>
      </CustomList>
    </ColumnContainer>
  );
};

export default Passion;
