import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from "@mui/material";

const AddChainButton = (props) => {
    const { openAddChainDialog } = props;
    return (
        <div id="addChainButton">
            <IconButton aria-label="Add" onClick={openAddChainDialog}>
                <AddIcon />
            </IconButton>
        </div>
    )
}

export default AddChainButton