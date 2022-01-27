// React
import { Fragment } from "react";

// Styled Components
import styled from "styled-components";

// Components
import FaqItem from "./FaqItem/FaqItem";

const Faq = () => {
  return (
    <Fragment>
      <div id="faq"></div>
      <Wrapper>
        <div className="transition-top"></div>
        <p className="header">Faq</p>

        <FaqItem
          title={"What is the total supply?"}
          info={`There will be a total of 3,333 unique Bored Zillas, which will be distributed as below:#        
Pre-Sale: 2000 Bored Zillas ( 1000 WL spots x 2 mints)#
Public Sale: Remaining unminted Bored Zillas.#
100 Bored Zillas will be reserved for giveaways and staff.#
          `}
        />
        <FaqItem
          title={"What network will this be launched on?"}
          info={`It will be launched on the Ethereum (Erc721) network`}
        />
        <FaqItem
          title={"How much does it cost to mint an NFT?"}
          info={`Pre-Sale: 0.06 ETH + gas (2 mint limit)#
          Public Sale: 0.07ETH + gas (4 mint limit per wallet)
          `}
        />

        <FaqItem
          title={"How many can I mint during the sale?"}
          info={`No max during public sale.
          `}
        />
        <FaqItem
          title={"How many can I mint during the sale?"}
          info={`Pre-Sale: 2 mint limit#
          Public Sale: 4 mint limit per wallet`}
        />
        <FaqItem
          title={
            "Will my Bored Zilla Club NFT be revealed directly after purchase?"
          }
          info={`Yes! You will be able to see your Bored Zilla in your Metamask wallet right after you mint it.`}
        />
        <FaqItem
          title={"When will we be able to see rarity and where?"}
          info={`Post-launch, traits will be revealed. Once all Zillas are minted, percentages on OpenSea will be accurate.
          `}
        />

        <FaqItem
          title={"Can I use metamask for this?"}
          info={`Yes, we recommend using metamask.
          `}
        />
      </Wrapper>
    </Fragment>
  );
};

export default Faq;

const Wrapper = styled.div`
  width: 100%;
  height: max-content;

  position: relative;
  padding: 50px 25px;

  color: #fff;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

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
    font-size: 4.5rem;
    padding-bottom: 30px;
    font-family: 700;

    font-family: "VT323", monospace;
  }

  background-color: #66a103;
`;
