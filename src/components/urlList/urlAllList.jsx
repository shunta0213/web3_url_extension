import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// css
import "../css/urlList.css"

const accordionStyle = {
    margin: "2px",
}

const accordionSummaryStyle = {
    fontSize: 20,
    fontWeight: "bold",
    padding: "0px 8px",
}

const AllUrlList = (props) => {
    const { value, leadingImage } = props
    return (
        <div id="urlAllList">
            <Accordion sx={accordionStyle}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <img alt="" src={leadingImage} width={30} height={30} sx={{ padding: "4px" }} />
                    <Typography sx={accordionSummaryStyle}>{value[0][0]}</Typography>
                </AccordionSummary>
                {value.map((value1, index1) => {
                    return (
                        <AccordionDetails key={"accordion-List" + index1}>
                            <a href={value1[1]} target="_blank" rel="noreferrer">
                                <Typography>{value1[0]}</Typography>
                            </a>
                        </AccordionDetails>
                    )
                })}
            </Accordion>
        </div>
    )
}

export default AllUrlList