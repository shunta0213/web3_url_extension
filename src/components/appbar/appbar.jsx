import * as React from 'react';
import '../css/appbar.css'
import Account from './account';
import { Typography } from '@mui/material';

import { chainList } from "../chainMenu/chainMenu"

const ResponsiveAppBar = (props) => {
    const { selectedChainIndex } = props;
    return (
        <header className="app-header">
            <div id="title">
                <span><Typography>Web3URLKeeper</Typography></span>
                <span class='chainTitle'><Typography>{chainList[selectedChainIndex]}</Typography></span>
            </div>
            <Account />
        </header>
    );
};
export default ResponsiveAppBar;