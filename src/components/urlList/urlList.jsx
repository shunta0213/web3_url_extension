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
    const { selectedChainIndex, urlFolder } = props;
    return (
        <div id="urlList">
            {urlFolder.map((value, index) => {
                if (selectedChainIndex === "all") {
                    console.log(value)
                    return (<AllUrlList value={value} leadingImage={leadingImages[index]} />)
                } else if (selectedChainIndex === index) {
                    return (<UrlEachChainTab value={value} index={index} leadingImage={leadingImages[index]} />)
                }
                return null
            })}
        </div>
    );
}

export default UrlList;