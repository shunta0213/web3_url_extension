import React from "react";
import { Dialog, DialogContent, DialogTitle, IconButton, Typography, TextField, Button } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
// css
import "../css/addBookmark.css"



const AddChain = (props) => {
    const { isOpen, handleClickClose } = props
    return (
        <Dialog open={isOpen} onClose={handleClickClose}>
            <DialogTitle sx={{ width: "300px" }}>
                <Typography sx={{ fontSize: "large", fontWeight: "bold" }}>Add Chain</Typography>
            </DialogTitle>
            <DialogContent>
                <span className="addChainDialogAddPhoto">
                    <Typography>Add Photo</Typography>
                    <IconButton sx={{ backgroundColor: "whitesmoke", margin: "4px" }}><LinkIcon /></IconButton>
                </span>
                <TextField id="standard-basic" label="" variant="standard" sx={{ width: "100%", padding: "10px 0px" }} />
                <div className="addBookMarkDialogButtons">
                    <Button variant="contained" sx={{ padding: "4px", margin: "10px 4px" }}>Confirm</Button>
                    <Button variant="outlined" sx={{ padding: "4px", margin: "10px 4px" }}>Reset</Button>
                </div>
            </DialogContent>
        </Dialog >
    )
}

export default AddChain