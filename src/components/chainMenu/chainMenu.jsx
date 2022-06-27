import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import "../css/chainMenu.css"

export const chainList = ["All", "Ethereum", "Solana", "Binance", "Polygon"];

const ChainMenu = (props) => {
    const { selectedChainIndex, setSelectedChainIndex } = props;
    const changeSelectedChain = (index) => {
        setSelectedChainIndex(index);
    };
    return (
        <div id="chainList">
            <ul>
                {chainList.map((value, index) => {
                    if (index === selectedChainIndex) {
                        return (
                            <li key={"chainList" + index} >
                                <button onClick={() => changeSelectedChain(index)}>
                                    <HomeIcon className="selectedChainIcon" />
                                    <span className="chainListTitle" >{value}</span>
                                </button>
                            </li>
                        );
                    }
                    return (
                        <li key={"chainList" + index} >
                            <button onClick={() => changeSelectedChain(index)}>
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