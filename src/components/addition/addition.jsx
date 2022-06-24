import React from "react";
import { Fab } from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const fabStyle = {
    margin: "0px 5px",
}

const fabItemStyle = {
    margin: "0 5px 0 0",
}

const Addition = () => {
    return (
        <div id="addition">
            <Fab sx={fabStyle} variant="extended" size="medium" >
                <AddCircleOutlineOutlinedIcon sx={fabItemStyle} />
                Add Folder
            </Fab>
            <Fab sx={fabStyle} variant="extended" size="medium" >
                <AddCircleOutlineOutlinedIcon sx={fabItemStyle} />
                Add URL
            </Fab>

        </div>
    );
}

export default Addition;