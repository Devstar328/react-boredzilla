// Styled Components
import styled from "styled-components";

// Components
import TeamMember from "./TeamMember/TeamMember";

const Team = () => {
  return (
    <Wrapper>
      <div className="transition-top"></div>
      <p className="header">Team Members</p>

      <div className="team">
        <TeamMember
          img={"./static/images/image-7.png"}
          header={"Keekaz"}
          info={"Founder & Artist"}
        />
        <TeamMember
          img={"./static/images/image-10.png"}
          header={"Dragon6"}
          info={"Moderator"}
        />
        <TeamMember
          img={"./static/images/image-11.png"}
          header={"Purely Goated"}
          info={"Marketer"}
        />
      </div>

      <div className="team">
        <TeamMember
          img={"./static/images/image-9.png"}
          header={"Trexagon"}
          info={"Artist"}
        />{" "}
        <TeamMember
          img={"./static/images/image-4.png"}
          header={"awmill20"}
          info={"Marketer"}
        />
      </div>
    </Wrapper>
  );
};

export default Team;

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  //  margin-top: 50px;

  padding-top: 50px !important;

  @media only screen and (min-width: 625px) {
    padding: 0 25px;
  }

  position: relative;

  .transition-top {
    height: 5px;
    width: 100vw;

    position: absolute;
    top: 0;
    left: 0;

    background-color: yellow;

    opacity: 0.1;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  .header {
    font-size: 4.5rem;
    color: #fff;
    font-family: "VT323", monospace;
  }

  .team {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;

    &-single {
      gap: 0;
      flex-wrap: nowrap;
      align-items: center;

      //   display: block;
      //  width: 100%;
    }
  }

  background-color: #000;
`;
