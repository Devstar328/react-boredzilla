// React
import { Fragment } from "react";

// Styled Components
import styled from "styled-components";

// Components
import RoadmapItem from "./RoadmapItem/RoadmapItem";

const Roadmap = () => {
  return (
    <Fragment>
      <div id="roadmap"></div>
      <Wrapper id="roadmap">
        <div className="transition-top"></div>

        <p className="header">Road Map</p>

        <div className="line-wrapper">
          <div className="roadmap-line"></div>
        </div>

        <div className="items">
          <RoadmapItem
            align={"left"}
            img={"./static/images/image-10.png"}
            title={"Phase 1"}
            info={`Mint (Late November)#We will release our collection of 3,333 unique Zillas. After the mint completion PVP game development begins`}
          />
          <RoadmapItem
            align={"right"}
            img={"./static/images/image-2.png"}
            title={"Phase 2"}
            info={`$ZILLA token will be released (Early December)#What is $ZILLA?#
            $ZILLA is a token on the Ethereum blockchain, that is used as a utility token for the Bored Zilla Club collection. $ZILLA tokenomics are built to reward holders weekly, simply for holding a Zilla. $ZILLA tokens can be used to mutate your Zilla, and for in game purchases to build your Zilla's strength.`}
          />
          <RoadmapItem
            align={"left"}
            img={"./static/images/image-3.png"}
            title={"Phase 3"}
            info={`MekaZillas will be released (Mid-Late December)#One  of the utilities of $ZILLA will be its mutation, in which a certain amount of $ZILLA will be burned in exchange for MekaZillas. Traits of MekaZillas will be completely different, and will have their own collection. Mutating into a MekaZilla will require two Zillas and a hard-drive. Hard-drives will be available for purchase for a small amount of $ZILLA.`}
          />
          <RoadmapItem
            align={"right"}
            img={"./static/images/image-4.png"}
            title={"Phase 4"}
            info={`PVP game development (Quarter 1 of 2022):#After minting has completed, we will begin the development of a PVP game. This game will allow Zillas to compete in a 2D Metaverse, where they will battle to see who the strongest Zilla is. There will be weekly tournaments where winners can earn $ZILLA, and receive exclusive roles for their triumphs.#Face off against fellow Zilla and MekaZilla holders and climb the ranks. Get weapons from the Weapon Shop to gain an advantage against others. Who can build the best squad and climb to the top of the ranks? Everyone starts at the bottom and slowly or rapidly gains ELO to get to the next rank. For further information about Weapon Shop and how to earn weapons check out our discord channel.
            `}
          />
        </div>
      </Wrapper>
    </Fragment>
  );
};

export default Roadmap;

const Wrapper = styled.div`
  width: 100%;

  color: #fff;
  padding: 50px 25px;
  position: relative;

  .transition-top {
    height: 5px;
    width: 100vw;

    position: absolute;
    top: 0;
    left: 0;

    background-color: black;

    opacity: 0.1;
  }

  .header {
    text-align: center;
    font-size: 4.5rem;
    padding-bottom: 50px;
    font-family: 700;
    font-family: "VT323", monospace;
  }
  .line-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    z-index: -1;
    //
    @media only screen and (max-width: 810px) {
      width: 500px;
      margin: 0 auto;
    }
    @media only screen and (max-width: 580px) {
      width: 100%;
    }
    //
  }
  .roadmap-line {
    width: 5px;
    border-radius: 20px;
    background-color: #fff;

    z-index: 10000;

    border: 8px solid transparent;

    background-color: red;
    width: 30px;

    background-clip: content-box, border-box;
    background-origin: border-box;
    transition: all 2s;

    //
    height: 3000px;
    @media only screen and (max-width: 810px) {
      height: 3000px;
    }
    @media only screen and (max-width: 580px) {
      height: 3000px;
    }
    @media only screen and (max-width: 450px) {
      height: 3000px;
    }
    @media only screen and (max-width: 380px) {
      height: 3000px;
    }
    //
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    //
    @media only screen and (max-width: 810px) {
      left: 91px;
    }
    @media only screen and (max-width: 580px) {
      left: 130px;
    }
    //
  }
  .items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }

  z-index: -1;

  background-color: #d1b300;
`;
