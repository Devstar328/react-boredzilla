// Styled Components
import styled from "styled-components";

// Material UI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqItem = (props) => {
  const infoItems = props.info.split("#");

  return (
    <Wrapper>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="icon" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="title">{props.title}</p>
        </AccordionSummary>
        <AccordionDetails>
          {infoItems.map((item, index) => (
            <p className="info" key={index}>
              {item}
            </p>
          ))}
        </AccordionDetails>
      </Accordion>
    </Wrapper>
  );
};

export default FaqItem;

const Wrapper = styled.div`
  .accordion {
    background-color: #fff;
    color: #fff;
    text-align: left;
    border-radius: 10px;

    //
    width: 800px;
    @media only screen and (max-width: 825px) {
      width: 90vw;
    }
    //

    .icon {
      fill: #000;
      transform: scale(1.5);
    }

    .title {
      font-size: 1.5rem;

      color: #000;
    }

    .info {
      font-size: 1.1rem;
      font-family: "Roboto", sans-serif;

      color: #000;
    }
  }
`;
