import React, { useState } from "react";
import { Fab, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// components
import AddBookmarkDialog from "./addBookmarkDialog";

// Fab のスタイル
const fabStyle = {
    margin: "0px 5px",
    backgroundColor: "white",
    "&:hover": {
        backgroundColor: "pink",
    }
}
// fabの中のスタイル
const fabItemStyle = {
    margin: "0 5px 0 0",
}

// BookMark追加するFAB
const AddBookmark = (props) => {
    const { urlFolder, setUrlFolder } = props
    // Dialog の状態
    const [isOpen, setIsOpen] = useState(false)
    const handleClickOpen = () => {
        setIsOpen(true)
        console.log(isOpen)
    }
    const handleClickClose = () => {
        setIsOpen(false)
    }
    return (
        <div id="addBookmark">
            <Fab sx={fabStyle} variant="extended" size="medium" onClick={handleClickOpen}>
                <AddCircleOutlineOutlinedIcon sx={fabItemStyle} />
                <Typography sx={{ fontSize: "small" }} >Add BookMark</Typography>
            </Fab>
            <AddBookmarkDialog
                isOpen={isOpen}
                handleClickClose={handleClickClose}
                urlFolder={urlFolder}
                setUrlFolder={setUrlFolder}
            />
        </div>
    );
}

export default AddBookmark;