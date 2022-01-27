// Styled Components
import styled from "styled-components";

// Material UI
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { mintActions } from "../../../../store/mint-slice";

const MintAmount = () => {
  // Redux
  const amount = useSelector((state) => state.mint.amount);
  const dispatch = useDispatch();

  const decreaseQuantity = () => {
    if (amount > 1 && amount <= 10) {
      dispatch(mintActions.handleAmount(amount - 1));
    }
  };

  const increaseQuantity = () => {
    if (amount >= 1 && amount < 10) {
      dispatch(mintActions.handleAmount(amount + 1));
    }
  };

  return (
    <Wrapper>
      <ButtonGroup size="small" className="wrapper">
        <Button className="decrease" onClick={decreaseQuantity}>
          -
        </Button>
        <Button className="quantity" disabled>
          {amount}
        </Button>
        <Button className="increase" onClick={increaseQuantity}>
          +
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default MintAmount;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    font-size: 20px;
    width: 100%;
    background-color: #fff;
    color: #000;
    border-radius: 10px;

    .increase {
      font-size: 30px;
      width: 100%;
      color: #000;

      border-radius: 0px 10px 10px 0px;
      border: none;
      outline: none;

      &:hover {
        border: none;
        background-color: transparent;
      }
    }
    .decrease {
      font-size: 30px;
      width: 100%;
      color: #000;

      border-radius: 10px 0px 0px 10px;
      border: none;
      outline: none;

      &:hover {
        border: none;
        background-color: transparent;
      }
    }
    .quantity {
      font-size: 30px;
      color: #000;
      width: 100%;
      border: none;
      color: #000;
      outline: none;

      &:hover {
        border: none;
        background-color: transparent;
      }
    }
  }
`;
