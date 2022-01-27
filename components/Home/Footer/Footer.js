// Styled Components
import styled from "styled-components";

// Components
import FooterSocials from "./FooterSocials/FooterSocials";

const Footer = () => {
  return (
    <Wrapper>
      <FooterSocials />
      <div className="copyright">
        <p className="info">Copyright © Bored Zilla Club 2021</p>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  width: 100%;
  height: max-content;

  padding-top: 50px;

  .copyright {
    padding: 25px;
    color: #fff;
    text-align: center;
  }

  background-color: #000;
`;
