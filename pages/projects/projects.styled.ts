import styled from "styled-components";

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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.text}};
  padding: 15px;
  border-radius: 15px;
  
  .child {
    display: none
  }
  :hover {
    box-shadow: 1px 1px 0 2px ${({ theme }) => theme.text}};
    height: fit-content;
  }
  :hover .child {
    display: block
  }
  transition: all 0.5s ease-out;
`;

export { ProjectsContainer, RowContainer, Card };
