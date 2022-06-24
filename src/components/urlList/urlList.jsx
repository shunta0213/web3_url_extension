import React from "react";
import "../css/urlList.css"

// Temporary URL List
const ETH = ["Ethereum", "uniswap"];
const Polygon = ["Polygon", "PolygonScan", "QuickSwap"]
const folder = [ETH, Polygon];

const UrlList = () => {
    return (
        // とりあえず適当に
        <div id="urlList">
            <ul>
                {folder.map((value) => {
                    return (
                        <li key={value[0]}>
                            {value[0]}
                            <ul>
                                {value.map((value1, index1) => {
                                    return (
                                        <li key={value[0] + index1}>{value1}</li>
                                    );
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default UrlList;