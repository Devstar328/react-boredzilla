// React
import React from "react";

// Redux
import { useSelector } from "react-redux";

// Styled Components
import styled from "styled-components";

// Material UI
import Button from "@mui/material/Button";

// Ethers
import { ethers } from "ethers";

// Web3Modal
import Web3Modal from "web3modal";

// Contract
import SmartContract from "../../../../ABI/ExhaustedElephants.json";

const SmartContractAddress = "0x1f2c298ec17a7bE435c5c90510E50A6980079c1B";

const MintButton = () => {
  const amount = useSelector((state) => state.mint.amount);

  const getMintCost = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      SmartContractAddress,
      SmartContract.abi,
      signer
    );

    const mintCost = await contract.cost();

    return mintCost.toString();
  };

  const mint = async () => {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        SmartContractAddress,
        SmartContract.abi,
        signer
      );

      const mintCost = await getMintCost();

      await contract.mint(
        signer.provider.provider.selectedAddress.toString(),
        amount,
        {
          value: (mintCost * amount).toString(),
        }
      );
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Wrapper>
      <Button variant="contained" className="button">
        MINT
      </Button>
    </Wrapper>
  );
};

export default MintButton;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 25px;

  .button {
    width: 100%;
    height: 100px;
    font-size: 1.5rem;
    background-color: #fff;
    border-radius: 10px;
    height: 60px;

    color: #000;

    &:hover {
      background-color: #fff;
    }
  }
`;
