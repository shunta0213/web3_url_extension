import * as React from 'react';
import Account from './account';
import { Typography } from '@mui/material';
import '../css/appbar.css'


const ResponsiveAppBar = (props) => {
    const { selectedChainIndex } = props;
    return (
        <header className="app-header">
            <div id="title">
                <span><Typography>Web3URLKeeper</Typography></span>
                {/* <span><Typography sx={{ fontSize: "small" }}>{chainList[selectedChainIndex]}</Typography></span> */}
            </div>
            <Account />
        </header>
    );
};
export default ResponsiveAppBar;