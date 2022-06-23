import styled from "styled-components";
import { KeyboardArrowRight } from "styled-icons/material-rounded";

const SmallKeyboardArrowRight = styled(KeyboardArrowRight)<{
  expanded: string;
}>`
  width: 25px;
  height: 25px;
  margin-top: 5px;
  transform: ${(props) =>
    props.expanded == "true" ? `rotate(90deg)` : `rotate(0deg)`};
  transition: all 0.25s linear;

  :hover {
    opacity: 0.8;
  }
`;

export { SmallKeyboardArrowRight };
