// Styled Components
import styled from "styled-components";

const TeamMember = (props) => {
  return (
    <Wrapper>
      <img src={props.img} alt="" />

      <div className="info-wrapper">
        <p className="header">{props.header}</p>
        <p className="info">{props.info}</p>
      </div>
    </Wrapper>
  );
};

export default TeamMember;

const Wrapper = styled.div`
  height: 200px;
  padding: 15px;
  border: 2px solid #fff;

  //
  width: 600px;
  @media only screen and (max-width: 625px) {
    width: 95vw;
  }
  //

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: linear-gradient(111.34deg, #050405, #1d1412);

  img {
    height: 100%;
  }

  .info-wrapper {
    width: 100%;
    height: 100%;
    padding: 0 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;

    .header {
      font-size: 1.75rem;
      font-weight: 500;
    }

    .info {
      font-size: 1.1rem;
      color: #fff;
      font-weight: 200;
    }
  }
`;
