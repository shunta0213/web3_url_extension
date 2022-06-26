import * as React from 'react';
import { ReactDOM } from 'react-dom';
import '../css/appbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import Account from './account';
import { IconButton, } from '@mui/material';

import { chainList } from "../chainMenu/chainMenu"

const ResponsiveAppBar = () => {
    return (
        <header className="app-header">
            <IconButton>
                <MenuIcon color="default" />
            </IconButton>
            <div id="title">
                <span>Web3URLKeeper</span>
                <span class='chainTitle'>{chainList[0]}</span>
            </div>
            <Account />
        </header>
    );
};
export default ResponsiveAppBar;