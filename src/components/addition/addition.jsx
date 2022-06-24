import React from "react";
import { Fab } from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

// Fab のスタイル
const fabStyle = {
    margin: "0px 5px",
}
// fabの中のスタイル
const fabItemStyle = {
    margin: "0 5px 0 0",
}

// フォルダとファイルを追加するFAB
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