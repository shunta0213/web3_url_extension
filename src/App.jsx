import React, { useState } from 'react';
import ResponsiveAppBar from './components/appbar/appbar';
import Addition from './components/addition/addition';
import UrlList from './components/urlList/urlList';
import ChainMenu from './components/chainMenu/chainMenu';

const App = () => {
  // 選択しているチェーンの管理
  const [selectedChainIndex, setSelectedChainIndex] = useState(0);
  return (
    <>
      {/* AppBar */}
      <ResponsiveAppBar selectedChainIndex={selectedChainIndex} />
      <ChainMenu selectedChainIndex={selectedChainIndex} setSelectedChainIndex={setSelectedChainIndex} />
      {/* FOLDER,　URLの追加FAB */}
      <Addition />
      <div id="main">
        <UrlList />
      </div>
    </>
  );
}

export default App;
