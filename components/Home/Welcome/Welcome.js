// Styled Components
import styled from "styled-components";

// Material UI
import Button from "@mui/material/Button";

// Components
import WelcomeBackground from "./WelcomeBackground/WelcomeBackground";

const Welcome = () => {
  return (
    <Wrapper>
      <img src="./static/images/banner.png" alt="" className="background" />

      <h1 className="header">WELCOME TO THE BORED ZILLA CLUB</h1>
      <p className="info">
        The Bored Zillas are an NFT collection of 3333 uniquely generated
        ERC-721 bitmap Zillas.
      </p>
      <Button className="button" variant="contained">
        <a href="" target="_blank" rel="noreferrer">
          VIEW ON OPENSEA
        </a>
      </Button>
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.div`
  width: 100%;
  height: 375px;
  text-align: center;
  padding: 0 25px;
  // position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;

  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;

    top: 0;
  }

  .header {
    color: #fff;

    @media only screen and (max-width: 655px) {
      width: 350px;
    }
    font-family: "VT323", monospace;
    font-size: 3rem;
  }

  .info {
    color: #fff;
    font-size: 1.25rem;
    line-height: 25px;
  }

  .button {
    background-color: #fff;
    width: 300px;
    height: 40px;
    font-size: 1.25rem;
    border-radius: 10px;

    a {
      color: #000;
      text-decoration: none;
    }

    &:hover {
      background-color: #fff;
    }
  }
`;
