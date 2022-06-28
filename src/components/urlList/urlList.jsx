import React from "react";
import { AccordionDetails } from "@mui/material";
// components
import AllUrlList from "./urlAllList";
// css
import "../css/urlList.css"
// images
import ethereumImage from "../../img/ethereum.svg"
import binanceImage from "../../img/binance.svg"
import polygonImage from "../../img/polygon.svg"
import solanaImage from "../../img/solana.svg"



// Temporary URL List
// image
// const urlList = {
//     eth:[
//         ["ethereum", "url"],
//         "aa"
//     ],
//     polygon:[
//         "aa",
//         "aa"
//     ]
// }

const all = []
const eth = [["Ethereum", "https://ethereum.org/en/"], ["uniswap", "https://uniswap.org/"]];
const solana = [["Solana", "https://solana.com/"]]
const binance = [["Binance", "https://www.binance.com/en"]];
const polygon = [["Polygon", "https://polygon.technology/"], ["PolygonScan", "https://polygonscan.com/"], ["QuickSwap", "https://quickswap.exchange/#/swap"]]
const urlFolder = [all, eth, solana, binance, polygon]

const leadingImages = [ethereumImage, solanaImage, binanceImage, polygonImage]

const UrlList = (props) => {
    const { selectedChainIndex } = props;
    return (
        // とりあえず適当に
        <div id="urlList">
            {urlFolder.map((value, index) => {
                if (selectedChainIndex === 0) {
                    if (index === 0) {
                        return (null)
                    }
                    return (<AllUrlList value={value} leadingImage={leadingImages[index - 1]} />)
                } else if (selectedChainIndex === index) {
                    return (
                        value.map((value1, index1) => {
                            return (
                                <AccordionDetails key={"accordion-List" + index1}>
                                    {value1}
                                </AccordionDetails>
                            )
                        })
                    )
                } else {
                    ;
                }
            })}
        </div>
    );
}

export default UrlList;