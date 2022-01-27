// Styled Components
import styled from "styled-components";

// Redux
import { useSelector } from "react-redux";

const MintTotal = () => {
  const amount = useSelector((state) => state.mint.amount);

  return (
    <Wrapper>
      <div className="info">
        <p className="header">Total</p>
        <p className="amount">{(0.07 * amount).toFixed(2)} ETH</p>
      </div>
    </Wrapper>
  );
};

export default MintTotal;

const Wrapper = styled.div`
  height: 75px;
  width: 100%;
  padding: 0 25px;
  color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .info {
    width: 100%;
    height: 100%;

    background-color: #fff;
    color: #000;
    padding: 12px;
    border-radius: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .header {
      font-size: 1.5rem;
    }

    .amount {
      font-size: 2.1rem;
    }
  }
`;
