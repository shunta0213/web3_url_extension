import React, { useState } from "react";
// package
import HomeIcon from '@mui/icons-material/Home';
// components
import AddChainButton from "./AddChainButton";
import { leadingImages } from "../urlList/urlList"
import AddChain from "../addition/addChain"
// css
import "../css/chainMenu.css"

export const chainList = ["All", "Ethereum", "Solana", "Binance", "Polygon"];


const ChainMenu = (props) => {
    const { selectedChainIndex, setSelectedChainIndex } = props;
    const changeSelectedChain = (index) => {
        setSelectedChainIndex(index);
    };
    // addchainの状態
    const [isOpen, setIsOpen] = useState(false)
    const handleClickClose = () => {
        setIsOpen(false)
    }
    const openAddChainDialog = () => {
        setIsOpen(true)
    }
    return (
        <div id="chainList">
            <ul>
                {chainList.map((value, index) => {
                    if (index === selectedChainIndex) {
                        return (
                            <li key={"chainList" + index} >
                                <button onClick={() => changeSelectedChain(index)}>
                                    <span className="chainListLeadingIcon">
                                        {index === 0 ? <HomeIcon className="selectedChainIcon" /> : <img className="selectedChainIcon" alt="" src={leadingImages[index - 1]} width={30} height={30} sx={{ padding: "4px" }} />}
                                    </span>
                                    <span className="chainListTitle" >{value}</span>
                                </button>
                            </li>
                        );
                    }
                    return (
                        <li key={"chainList" + index} >
                            <button onClick={() => changeSelectedChain(index)}>
                                <span className="chainListLeadingIcon">
                                    {index === 0 ? <HomeIcon /> : <img alt="" src={leadingImages[index - 1]} width={30} height={30} sx={{ padding: "4px" }} />}
                                </span>
                                <span className="chainListTitle" >{value}</span>
                            </button>
                        </li>
                    );
                })}
                <AddChainButton openAddChainDialog={openAddChainDialog} />
                <AddChain isOpen={isOpen} handleClickClose={handleClickClose} />
            </ul>
        </div>
    );
}

export default ChainMenu;