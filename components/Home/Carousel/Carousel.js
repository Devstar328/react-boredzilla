// Styled Components
import styled from "styled-components";

// Material UI
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

// React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  // Slider Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    swipe: true,
    arrows: false,
    autoplaySpeed: 1500,
    customPaging: () => <FiberManualRecordIcon />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Wrapper {...settings}>
      <div className="slide-2">
        <img src="https://cdn.discordapp.com/attachments/904895484810907658/911808965602607145/IMG_0250.png" alt="" />
      </div>
      <div className="slide-3">
        <img src="https://cdn.discordapp.com/attachments/904895484810907658/911808965829074964/IMG_0251.png" alt="" />
      </div>

      <div className="slide-5">
        <img src="https://cdn.discordapp.com/attachments/904895484810907658/911808973039075348/IMG_0252.png" alt="" />
      </div>
      <div className="slide-6">
        <img src="https://cdn.discordapp.com/attachments/904895484810907658/911808973278154782/IMG_0253.png" alt="" />
      </div>
      <div className="slide-7">
        <img src="https://cdn.discordapp.com/attachments/904895484810907658/911808981163458600/IMG_0254.png" alt="" />
      </div>
      <div className="slide-8">
        <img src="https://cdn.discordapp.com/attachments/904895484810907658/911808981385744435/IMG_0255.png" alt="" />
      </div>
      <div className="slide-9">
        <img src="https://cdn.discordapp.com/attachments/904895484810907658/911808988398624768/IMG_0256.png" alt="" />
      </div>
      <div className="slide-10">
        <img src="https://cdn.discordapp.com/attachments/904895484810907658/911808988679639120/IMG_0257.png" alt="" />
      </div>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled(Slider)`
  div {
    img {
      width: 100%;
    }
  }

  .slick-slide div {
    outline: none;
    border: 1px solid transparent;
  }

  background-color: transparent;
`;
