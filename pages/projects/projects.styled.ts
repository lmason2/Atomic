import styled from "styled-components";

export const ProjectsContainer = styled.div`
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

export const RowContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 1rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.text}};
  padding: 15px;
  border-radius: 15px;
  :hover {
    box-shadow: 1px 1px 0 2px ${({ theme }) => theme.text}};
    height: fit-content;
  }
  transition: all 0.5s ease-out;
`;
