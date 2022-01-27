// Styled Components
import styled from "styled-components";

// Material UI
import TwitterIcon from "@mui/icons-material/Twitter";

const FooterSocials = () => {
  return (
    <Wrapper>
      <p className="header">FOLLOW US</p>

      <div className="socials">
        <a
          href="https://twitter.com/boredzillaclub/"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon className="img" />
        </a>
        <a
          href="https://discord.gg/unNMvfxNKC"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./static/images/discord-icon.svg" alt="" className="img" />
        </a>
      </div>
    </Wrapper>
  );
};

export default FooterSocials;

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  padding: 50px 25px;

  .header {
    text-align: center;
    color: #fff;
    font-size: 2rem;
    padding-bottom: 20px;
  }

  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;

    a {
      .img {
        font-size: 50px;
        width: 50px;
        color: #fff;
        fill: #fff;
        cursor: pointer;
      }
    }
  }
`;
