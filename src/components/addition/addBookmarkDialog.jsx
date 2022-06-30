import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, FormControl, FormControlLabel, Radio, RadioGroup, Typography, AccordionSummary, Accordion, AccordionDetails, TextField, Button, selectClasses } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// css
import "../css/addBookmark.css"

const AddBookmarkDialog = (props) => {
    const { isOpen, handleClickClose, urlFolder, setUrlFolder } = props
    const [newSelectedChain, setNewSelectedChain] = useState();
    const [newBookMarkName, setNewBookMarkName] = useState("");
    const [newBookMarkUrl, setNewBookMarkUrl] = useState("");
    const [expanded, setExpanded] = useState(false);
    const setBookmark = (chain, name, url) => {
        let newUrlFolder = []
        urlFolder.forEach((elem, index) => {
            if (elem[0] === chain) {
                let tempFolder = [...elem, [name, url]]
                newUrlFolder = [...newUrlFolder, tempFolder]
            } else {
                newUrlFolder = [...newUrlFolder, elem]
            }
        })
        setUrlFolder(newUrlFolder)
    }
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
                            <Typography sx={{ fontWeight: "bold" }}> {newSelectedChain} </Typography>
                        </span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="select-chain-radio-buttons-group-label"
                                name="select-chain-radio-buttons-group"
                                value={newSelectedChain}
                                onChange={(event) => {
                                    // 値のセット
                                    setNewSelectedChain(event.target.value)
                                    // アコーディオンを閉じる
                                    setExpanded(false)
                                }}
                                sx={{ height: "200px", width: "300px", overflow: "scroll", overflowX: "hidden" }}
                            >
                                {urlFolder.map((value) => <FormControlLabel key={value[0]} value={value[0]} label={value[0]} control={<Radio />} sx={{ display: "block" }} />)}
                            </RadioGroup>
                            <Typography>AddChain</Typography>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
                <Typography sx={{ padding: "8px" }}>Name</Typography>
                <TextField
                    id="standard-basic" label=""
                    variant="standard" sx={{ width: "100%" }}
                    onChange={(event) => setNewBookMarkName(event.target.value)}
                />
                <Typography sx={{ padding: "8px" }}>UrL</Typography>
                <TextField id="standard-basic"
                    label="" variant="standard"
                    sx={{ width: "100%" }}
                    onChange={(event) => setNewBookMarkUrl(event.target.value)}
                />
                <div className="addBookMarkDialogButtons">
                    <Button
                        variant="contained"
                        sx={{ padding: "4px", margin: "10px 4px" }}
                        onClick={() => setBookmark(newSelectedChain, newBookMarkName, newBookMarkUrl)}
                    >
                        Confirm
                    </Button>
                    <Button variant="outlined" sx={{ padding: "4px", margin: "10px 4px" }}>Reset</Button>
                </div>
            </DialogContent>
        </Dialog >
    )
}

export default AddBookmarkDialog