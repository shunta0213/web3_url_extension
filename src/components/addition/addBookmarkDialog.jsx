import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, FormControl, FormControlLabel, Radio, RadioGroup, Typography, AccordionSummary, Accordion, AccordionDetails, TextField, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// css
import "../css/addBookmark.css"

const AddBookmarkDialog = (props) => {
    const { isOpen, handleClickClose, selectedChain, setSelectedChain, newUrl, setNewUrl } = props
    const [expanded, setExpanded] = useState(false);
    return (
        <Dialog open={isOpen} onClose={handleClickClose}>
            <DialogTitle><Typography sx={{ fontSize: "large", fontWeight: "bold" }}>Add Bookmark</Typography></DialogTitle>
            <DialogContent>
                <Typography sx={{ fontsize: "large", padding: "8px" }}>Select Chain</Typography>
                <Accordion expanded={expanded} onChange={(event) => { setExpanded(!expanded) }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <span className="AddBookmarkDialogSelectChain">
                            <Typography sx={{ fontWeight: "bold" }}> {selectedChain} </Typography>
                        </span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="select-chain-radio-buttons-group-label"
                                defaultValue="ethereum"
                                name="select-chain-radio-buttons-group"
                                value={selectedChain}
                                onChange={(event) => {
                                    // 値のセット
                                    setSelectedChain(event.target.value)
                                    // アコーディオンを閉じる
                                    setExpanded(false)
                                }}
                                sx={{ height: "200px", width: "300px", overflow: "scroll", overflowX: "hidden" }}
                            >
                                <div>
                                    <FormControlLabel value="ethereum" control={<Radio />} label="ethereum" sx={{ display: "block" }} />
                                    <FormControlLabel value="solana" control={<Radio />} label="solana" sx={{ display: "block" }} />
                                    <FormControlLabel value="binance" control={<Radio />} label="binance" sx={{ display: "block" }} />
                                    <FormControlLabel value="polygon" control={<Radio />} label="polygon" sx={{ display: "block" }} />
                                </div>
                            </RadioGroup>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
                <Typography sx={{ padding: "8px" }}>UrL</Typography>
                <TextField id="standard-basic" label="" variant="standard" sx={{ width: "100%" }} onChange={(event) => setNewUrl(event.target.value)} />
                <div className="addBookMarkDialogButtons">
                    <Button variant="contained" sx={{ padding: "4px", margin: "10px 4px" }}>Confirm</Button>
                    <Button variant="outlined" sx={{ padding: "4px", margin: "10px 4px" }}>Reset</Button>
                </div>
            </DialogContent>
        </Dialog >
    )
}

export default AddBookmarkDialog