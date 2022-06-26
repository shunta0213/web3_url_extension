import React, { useState } from "react";
import "../css/appbar.css";
import "../css/addition.css"
import PersonIcon from '@mui/icons-material/Person';
import { IconButton, Menu, MenuList, } from "@mui/material";

// profileのドロップダウンリストの中身
const menuList = ['Profile', 'Settings', 'LogOut'];
// profileのドロップダウンリストのスタイル
const menuListStyle = {
    padding: "10px",
}

// アカウントのボタン
const Account = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    return (
        <div>
            <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <PersonIcon className="accountIcon" sx={{ fontSize: "40px" }} />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {menuList.map((value, index) => {
                    return (<MenuList key={index} onClick={handleClose} sx={menuListStyle}>{value}</MenuList>);
                })}
            </Menu>
        </div>
    );
};

export default Account;