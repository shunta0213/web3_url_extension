import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import "../css/chainMenu.css"

const ChainList = ["Ethereum", "Solana", "Binance", "Polygon"]

const ChainMenu = () => {
    return (
        <div id="chainList">
            <ul>
                <li>
                    <span><HomeIcon /></span>
                </li>
                <li>
                    <span><HomeIcon /></span>
                </li>
                <li>
                    <span><HomeIcon /></span>
                </li>
                <li>
                    <span><HomeIcon /></span>
                </li>

            </ul>
        </div>
    );
}

export default ChainMenu;