// React
import React, { useState, useEffect } from "react";

// Styled Components
import styled from "styled-components";

// Ethers
import { ethers } from "ethers";

// Contract
import SmartContract from "../../../../ABI/ExhaustedElephants.json";

const SmartContractAddress = "0x1f2c298ec17a7bE435c5c90510E50A6980079c1B";

const MintInfo = () => {
  const [remaining, setRemaining] = useState("");

  const getRemaining = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://mainnet.infura.io/v3/288daa6de7c64735bbe5620bf41728de"
    );

    const contract = new ethers.Contract(
      SmartContractAddress,
      SmartContract.abi,
      provider
    );

    const total = await contract.totalSupply();

    setRemaining(total);
  };

  useEffect(() => {
    getRemaining();
  }, []);

  return (
    <Wrapper>
      <div className="content">
        <p className="heading">Price per Bored Zilla</p>
        <p className="price">
          <span>0.07</span> ETH Each
        </p>
        <p className="remaining">3333 remaining</p>
      </div>
    </Wrapper>
  );
};

export default MintInfo;

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  text-align: center;
  padding: 0 25px;
  color: #fff;

  .content {
    background-color: #fff;
    color: #000;
    border-radius: 10px;
    padding: 12px;
    .heading {
      font-size: 1.5rem;
    }

    .price {
      font-size: 2.25rem;

      span {
        font-weight: 700;
      }
    }

    .remaining {
      font-size: 1.5rem;
    }
  }
`;
