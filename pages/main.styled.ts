import styled from "styled-components";

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5vh;
  display: flex;
  flex: 1;
  padding: 1.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.text}};
  justify-content: center;
  align-items: center;
`;

export const NavBarContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 1.5rem 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.text}};
  background: ${({ theme }) => theme.body}};
  height: 5vh;
  gap: 1rem;
  justify-content: center;
`;

export const LandingPageButton = styled.button`
  background-color: ${({ theme }) => theme.body}};
  padding: 15px 20px;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text}};
  border-radius: 10px;
  font-family: ${({ theme }) => theme.font}};
  width: fit-content;
  height: fit-content;

  :hover {
    box-shadow: 1px 1px 0 2px ${({ theme }) => theme.text}};
    transition: all 0.5s ease-out;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-top: auto;
  margin-bottom: auto;
  height: 100%;
  gap: 1rem;
`;

export const ContentContainer = styled.div`
  height: 100vh;
`;
