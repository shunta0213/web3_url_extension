import React from 'react';
import ResponsiveAppBar from './components/appbar/appbar';
import Addition from './components/addition/addition';
import UrlList from './components/urlList/urlList';
import ChainMenu from './components/chainMenu/chainMenu';

const App = () => {
  return (
    <>
      {/* AppBar */}
      <ResponsiveAppBar />
      <ChainMenu />
      {/* FOLDER,　URLの追加FAB */}
      <Addition />
      <div id="main">
        <UrlList />
      </div>
    </>
  );
}

export default App;
