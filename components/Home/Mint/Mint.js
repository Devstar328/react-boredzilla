// Styled Components
import styled from "styled-components";

// Redux
import { Provider } from "react-redux";
import store from "../../../store/index";

// Components
import MintHeader from "./MintHeader/MintHeader";
import MintInfo from "./MintInfo/MintInfo";
import MintAmount from "./MintAmount/MintAmount";
import MintTotal from "./MintTotal/MintTotal";
import MintButton from "./MintButton/MintButton";

const Mint = () => {
  return (
    <Provider store={store}>
      <div id="mint"></div>
      <Wrapper id="mint">
        <MintHeader />
        <MintInfo />
        <MintAmount />
        <MintTotal />
        <MintButton />
      </Wrapper>
    </Provider>
  );
};

export default Mint;

const Wrapper = styled.div`
  height: min-content;
  z-index: 1000;
  margin: 0 auto;

  margin: 50px auto;
  padding: 40px 0;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 40px;

  width: 550px;
  @media only screen and (max-width: 575px) {
    width: 95%;
  }

  border: 3px solid #fff;
  border-radius: 10px;

  background-color: #ff6865;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`;
