// Styled Components
import styled from "styled-components";

// Components
import Nav from "./Nav/Nav";
import Welcome from "./Welcome/Welcome";
import Carousel from "./Carousel/Carousel";
import Mint from "./Mint/Mint";
import Roadmap from "./Roadmap/Roadmap";
import Faq from "./Faq/Faq";
import Team from "./Team/Team";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <Wrapper>
      <Nav />
      <Welcome />
      <Carousel />
      <Mint />

      <Roadmap />
      <Faq />
      <Team />
      <Footer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  // height: 300vh;

  overflow-x: hidden;

  font-family: "Montserrat", sans-serif;
`;
