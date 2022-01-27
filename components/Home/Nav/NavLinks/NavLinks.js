// Styled Components
import styled from "styled-components";

// Material UI
import TwitterIcon from "@mui/icons-material/Twitter";

const NavLinks = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#mint">MINT</a>
        </li>
        <li>
          <a href="#roadmap">ROADMAP</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
      </ul>

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

export default NavLinks;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  height: 100%;
  ul {
    height: 100%;

    display: flex;
    align-items: center;
    gap: 35px;
    li {
      list-style-type: none;

      a {
        color: #fff;
        text-decoration: none;
        font-weight: 700;
        letter-spacing: 1.25px;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out;

        font-size: 1.25rem;

        &:hover {
          color: rgba(255, 255, 255, 0.75);
        }
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }

  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;

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
