import Image from "next/image";
import styled from "styled-components";

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

const StyledImage = styled.img<{ src: string }>`
  src: ${(props) => props.src};
  height: 40px;
  width: auto;
  transition: all 0.25s linear;
  margin: 0px 10px;
  :hover {
    height: 300px;
  }
`;

export {
  AboutMeContainer,
  RowContainer,
  ColumnContainer,
  CustomList,
  CustomListItem,
  StyledHR,
  StyledImage,
};
