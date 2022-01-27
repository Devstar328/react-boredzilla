// Styled Components
import styled from "styled-components";

// Particles
import Particles from "react-particles-js";
import ParticleConfig from "./particle-config";

const WelcomeBackground = () => {
  return <Wrapper params={ParticleConfig} />;
};

export default WelcomeBackground;

const Wrapper = styled(Particles)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;
  opacity: 0.25;
`;
