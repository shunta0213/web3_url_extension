import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from "@mui/material";

const AddChainButton = () => {
    return (
        <div id="addChainButton">
            <IconButton aria-label="Add" >
                <AddIcon />
            </IconButton>
        </div>
    )
}

export default AddChainButton