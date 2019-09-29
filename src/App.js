import React from 'react';
import './App.css';
import SongList from './components/SongList';
import MyContextProvider from './context/MyContext';

function App() {
  return (
  <div className="App">
    <MyContextProvider>
      <SongList />
    </MyContextProvider>
  </div>
  );
}

export default App;
