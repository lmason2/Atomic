import { StyledImage } from "../../../pages/aboutMe/aboutMe.styled";
import { SocialContainer } from "./social.styled";

const Social = () => {
  return (
    <SocialContainer>
      <a href="https://github.com/lmason2" target="_blank" rel="noreferrer">
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
      <a
        href="https://www.instagram.com/lvke_mvson/"
        target="_blank"
        rel="noreferrer"
      >
        <StyledImage
          src="/instagram.png"
          style={{ width: "30px", height: "auto" }}
        />
      </a>
    </SocialContainer>
  );
};

export default Social;
