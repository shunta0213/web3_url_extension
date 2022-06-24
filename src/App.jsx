import React from 'react';
import ResponsiveAppBar from './components/appbar/appbar';
import Addition from './components/addition/addition';
import UrlList from './components/urlList/urlList';

const App = () => {
  return (
    <>
      {/* AppBar */}
      <ResponsiveAppBar />
      {/* FOLDER,　URLの追加FAB */}
      <Addition />
      {/* URLのリスト */}
      <UrlList />
    </>
  );
}

export default App;
