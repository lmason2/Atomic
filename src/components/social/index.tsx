import { StyledImage } from "../../../pages/aboutMe/index";
import styled from "styled-components";

const Social = () => {
  return (
    <SocialContainer>
      <a href="https://github.com/lmason2">
        <StyledImage
          src="/github.png"
          style={{
            width: "30px",
            height: "auto",
            background: "white",
            border: "1px solid white",
            borderRadius: "40px",
          }}
        />
      </a>
      <a href="https://twitter.com/LvkeMvson">
        <StyledImage
          src="/twitter.png"
          style={{ width: "30px", height: "auto" }}
        />
      </a>
      <a href="https://www.instagram.com/lvke_mvson/">
        <StyledImage
          src="/instagram.png"
          style={{ width: "30px", height: "auto" }}
        />
      </a>
    </SocialContainer>
  );
};

// styles
const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export default Social;
