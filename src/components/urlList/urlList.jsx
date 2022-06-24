import React from "react";
import "../css/urlList.css"

// Temporary URL List
const ETH = ["Ethereum", "uniswap"];
const Polygon = ["Polygon", "PolygonScan", "QuickSwap"]
const folder = [ETH, Polygon];

const UrlList = () => {
    return (
        <div id="urlList">
            <ul>
                {folder.map((value) => {
                    return (
                        <li>
                            {value[0]}
                            <ul>
                                {value.map((value1) => {
                                    return (
                                        <li>{value1}</li>
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