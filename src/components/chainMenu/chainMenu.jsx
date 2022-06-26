import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import "../css/chainMenu.css"

export const chainList = ["All", "Ethereum", "Solana", "Binance", "Polygon"];

const ChainMenu = () => {
    const [selectedChain, setSelectedChain] = useState(0);
    const changeSelectedChain = (newIndex) => {
        setSelectedChain(newIndex);
        console.log(selectedChain);
    };
    return (
        <div id="chainList">
            <ul>
                {chainList.map((value, index) => {
                    return (
                        <li>
                            <button key={index} onClick={() => changeSelectedChain(index)}>
                                <HomeIcon />
                                <span className="chainListTitle" >{value}</span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ChainMenu;