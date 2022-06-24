import * as React from 'react';
import { ReactDOM } from 'react';
import '../css/header.css'
import MenuIcon from '@mui/icons-material/Menu';
import Account from './account';
import { IconButton, } from '@mui/material';


const ResponsiveAppBar = () => {
    return (
        <header className="app-header">
            <IconButton>
                <MenuIcon color="default" />
            </IconButton>
            <div>Web3URLKeeper</div>
            <Account />
        </header>
    );
};
export default ResponsiveAppBar;