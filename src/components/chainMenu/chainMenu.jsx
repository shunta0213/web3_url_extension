import React, { useState } from "react";
// package
import HomeIcon from '@mui/icons-material/Home';
// components
import AddChainButton from "./AddChainButton";
import AddChain from "../addition/addChain"

// css
import "../css/chainMenu.css"



const ChainMenu = (props) => {
    const { urlFolder, setUrlFolder, selectedChainIndex, setSelectedChainIndex, leadingImages } = props;
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
        <div id="chainList" style={{ height: (urlFolder.length + 3) * 55 }} >
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
                                        <img className="selectedChainIcon" src={leadingImages[index]} alt="" width={30} height={30} sx={{ padding: "4px" }} />
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
                <AddChain urlFolder={urlFolder} setUrlFolder={setUrlFolder} isOpen={isOpen} handleClickClose={handleClickClose} />
            </ul>
        </div>
    );
}

export default ChainMenu;