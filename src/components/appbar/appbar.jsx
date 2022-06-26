import * as React from 'react';
import '../css/appbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import Account from './account';
import { IconButton, } from '@mui/material';

import { chainList } from "../chainMenu/chainMenu"

const ResponsiveAppBar = (props) => {
    const { selectedChainIndex } = props;
    return (
        <header className="app-header">
            <IconButton>
                <MenuIcon color="default" />
            </IconButton>
            <div id="title">
                <span>Web3URLKeeper</span>
                <span class='chainTitle'>{chainList[selectedChainIndex]}</span>
            </div>
            <Account />
        </header>
    );
};
export default ResponsiveAppBar;