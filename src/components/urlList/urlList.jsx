import React from "react";
// components
import AllUrlList from "./urlAllTab";
import UrlEachChainTab from "./urlEachChainTab"
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

export const leadingImages = [ethereumImage, solanaImage, binanceImage, polygonImage]



export const accordionStyle = {
    margin: "2px",
}

export const accordionSummaryStyle = {
    fontSize: 20,
    fontWeight: "bold",
    padding: "0px 8px",
}


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
                    return (<UrlEachChainTab value={value} index={index} leadingImage={leadingImages[index - 1]} />)
                } else {
                    ;
                }
            })}
        </div>
    );
}

export default UrlList;