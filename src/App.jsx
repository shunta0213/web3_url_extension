import React, { useState } from 'react';
import ResponsiveAppBar from './components/appbar/appbar';
import AddBookmark from './components/addition/addBookmark';
import UrlList from './components/urlList/urlList';
import ChainMenu from './components/chainMenu/chainMenu';


const eth = ["ethereum", ["Ethereum", "https://ethereum.org/en/"], ["uniswap", "https://uniswap.org/"]];
const solana = ["solana", ["Solana", "https://solana.com/"]]
const binance = ["binance", ["Binance", "https://www.binance.com/en"]];
const polygon = ["polygon", ["Polygon", "https://polygon.technology/"], ["PolygonScan", "https://polygonscan.com/"], ["QuickSwap", "https://quickswap.exchange/#/swap"]]



const App = () => {
  // 選択しているチェーンの管理
  const [selectedChainIndex, setSelectedChainIndex] = useState(0);
  const [urlFolder, setUrlFolder] = useState([eth, solana, binance, polygon])
  return (
    <>
      {/* AppBar */}
      <ResponsiveAppBar selectedChainIndex={selectedChainIndex} />
      <ChainMenu urlFolder={urlFolder} selectedChainIndex={selectedChainIndex} setSelectedChainIndex={setSelectedChainIndex} />
      {/* FOLDER,　URLの追加FAB */}
      <AddBookmark urlFolder={urlFolder} setUrlFolder={setUrlFolder} />
      <div id="main">
        <UrlList selectedChainIndex={selectedChainIndex} urlFolder={urlFolder} />
      </div>
    </>
  );
}

export default App;
