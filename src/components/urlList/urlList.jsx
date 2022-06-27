import { valueToPercent } from "@mui/base";
import React from "react";
import "../css/urlList.css"

// Temporary URL List
// image
// const urlList = {
//     eth:[
//         "aa",
//         "aa"
//     ],
//     polygon:[
//         "aa",
//         "aa"
//     ]
// }
const all = []
const eth = ["Ethereum", "uniswap"];
const solana = ["solana", "test", "test1"]
const binance = ["binance"];
const polygon = ["Polygon", "PolygonScan", "QuickSwap"]
const folder = [all, eth, solana, binance, polygon]

const UrlList = (props) => {
    const { selectedChainIndex } = props;
    return (
        // とりあえず適当に
        <div id="urlList">
            <ul>
                {folder.map((value, index) => {
                    if (selectedChainIndex === 0) {
                        return (
                            <li key={value[0]}>
                                {value[0]}
                                <ul key={value[0] + "root"}>
                                    {value.map((value1, index1) => {
                                        return (
                                            <li key={value[0] + index1}>{value1}</li>
                                        );
                                    })}
                                </ul>
                            </li>
                        );
                    } else if (selectedChainIndex === index) {
                        return (
                            <li key={value[0]}>
                                {value[0]}
                                <ul key={value[0] + "root"}>
                                    {value.map((value1, index1) => {
                                        return (
                                            <li key={value[0] + index1}> {value1} </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    } else {
                        ;
                    }
                })}
            </ul>
        </div>
    );
}

export default UrlList;