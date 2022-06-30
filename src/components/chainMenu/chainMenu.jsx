import React, { useState } from "react";
// package
import HomeIcon from '@mui/icons-material/Home';
// components
import AddChainButton from "./AddChainButton";
import { leadingImages } from "../urlList/urlList"
import AddChain from "../addition/addChain"
// css
import "../css/chainMenu.css"



const ChainMenu = (props) => {
    const { urlFolder, selectedChainIndex, setSelectedChainIndex } = props;
    const changeSelectedChain = (index) => {
        setSelectedChainIndex(index);
    };
    // addChainの状態
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
                <li>
                    <button onClick={() => changeSelectedChain("all")}>
                        <span className="chainListLeadingIcon">{selectedChainIndex === "all" ? <HomeIcon className="selectedChainIcon" /> : <HomeIcon />}</span>
                    </button>
                </li>
                {urlFolder.map((value, index) => {
                    if (index === selectedChainIndex) {
                        return (
                            <li key={"chainList" + index} >
                                <button onClick={() => changeSelectedChain(index)}>
                                    <span className="chainListLeadingIcon">
                                        <img className="selectedChainIcon" alt="" src={leadingImages[index]} width={30} height={30} sx={{ padding: "4px" }} />
                                    </span>
                                    <span className="chainListTitle" >{value[0]}</span>
                                </button>
                            </li>
                        );
                    }
                    return (
                        <li key={"chainList" + index} >
                            <button onClick={() => changeSelectedChain(index)}>
                                <span className="chainListLeadingIcon">
                                    <img alt="" src={leadingImages[index]} width={30} height={30} sx={{ padding: "4px" }} />
                                </span>
                                <span className="chainListTitle" >{value[0]}</span>
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