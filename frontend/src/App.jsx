import React, { useState } from 'react';
import ResponsiveAppBar from './components/appbar/appbar';
import AddBookmark from './components/addition/addBookmark';
import UrlList from './components/urlList/urlList';
import ChainMenu from './components/chainMenu/chainMenu';
import { Dialog, DialogTitle, DialogContent, FormControl, Typography, Button } from '@mui/material';
import { useEffect } from 'react';


const all = []
const eth = [["Ethereum", "https://ethereum.org/en/"], ["uniswap", "https://uniswap.org/"]];
const solana = [["Solana", "https://solana.com/"]]
const binance = [["Binance", "https://www.binance.com/en"]];
const polygon = [["Polygon", "https://polygon.technology/"], ["PolygonScan", "https://polygonscan.com/"], ["QuickSwap", "https://quickswap.exchange/#/swap"]]



const App = () => {
  // Metamask Installed or not
  const [metamaskFlag, setMetamaskFlag] = useState(false)
  // MetamaskAccount
  const [account, setAccount] = useState(null)
  const [errMsg, setErrMsg] = useState(null)
  // Check Metamask installed
  useEffect(() => {
    setMetamaskFlag(window.ethereum && window.ethereum.metamask)
  }, [])
  // Connect MetamaskWallet
  const connectWallet = () => {
    window.ethereum.request({ method: "eth_requestAccounts" })
      .then((result) => {
        setAccount(result[0])
      }).catch((err) => {
        setErrMsg(err.message)
      })
  }

  if (metamaskFlag) {
    return (
      <>
        <Typography>Connect Wallet</Typography>
      </>
    )
  } else {
    return (
      <>
        <Typography>Please Install Metamask</Typography>
      </>
    )
  }
  // return Main()
}


const Main = () => {
  // 選択しているチェーンの管理
  const [selectedChainIndex, setSelectedChainIndex] = useState(0);
  const [urlFolder, setUrlFolder] = useState([all, eth, solana, binance, polygon])
  return (
    <>
      {/* AppBar */}
      <ResponsiveAppBar selectedChainIndex={selectedChainIndex} />
      <ChainMenu selectedChainIndex={selectedChainIndex} setSelectedChainIndex={setSelectedChainIndex} />
      {/* FOLDER,　URLの追加FAB */}
      <AddBookmark urlFolder={urlFolder} setUrlFolder={setUrlFolder} />
      <div id="main">
        <UrlList selectedChainIndex={selectedChainIndex} urlFolder={urlFolder} />
      </div>
    </>
  );
}

const LogIn = () => {
  return (
    <Dialog open={true}>
      <DialogTitle><Typography>LogIn</Typography></DialogTitle>
      <DialogContent>
        <Button>Connect Wallet</Button>
      </DialogContent>
    </Dialog>
  )
}

export default App;
