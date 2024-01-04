import React from "react";
import styles from "./Accordion.module.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';

const StyledIconWrapper = styled('div')({
  backgroundColor: '#E3B748',
  height: '24px',
  borderRadius: '1rem',
});


const AccordionForFaq = ({header, summary}) => {
return(
    <Accordion className={styles.accord}>
        <AccordionSummary
          expandIcon={
            <StyledIconWrapper>
              <AddIcon />
            </StyledIconWrapper>
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{header}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {summary}
          </Typography>
        </AccordionDetails>
      </Accordion>
)
}

export default AccordionForFaq;