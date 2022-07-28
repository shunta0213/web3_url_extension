import React from "react";
import { Dialog, DialogContent, DialogTitle, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
// css
import "../css/addBookmark.css"

const AddBookmarkDialog = (props) => {
    const { isOpen, handleClickClose, selectedChain, setSelectedChain } = props
    return (
        <Dialog open={isOpen} onClose={handleClickClose}>
            <DialogTitle><Typography>Add Bookmark</Typography></DialogTitle>
            <DialogContent>
                <Typography>Select Chain</Typography>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="select-chain-radio-buttons-group-label"
                        defaultValue="ethereum"
                        name="select-chain-radio-buttons-group"
                        value={selectedChain}
                        onChange={(event) => {
                            setSelectedChain(event.target.value)
                        }}
                    >
                        <FormControlLabel value="ethereum" control={<Radio />} label="ethereum" />
                        <FormControlLabel value="solana" control={<Radio />} label="solana" />
                        <FormControlLabel value="binance" control={<Radio />} label="binance" />
                        <FormControlLabel value="polygon" control={<Radio />} label="polygon" />
                    </RadioGroup>
                </FormControl>
                <Typography>UrL</Typography>
            </DialogContent>
        </Dialog>
    )
}

export default AddBookmarkDialog