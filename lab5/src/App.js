import React from 'react';
import Search from './components/Search';
import Team from './components/Team';
import './App.css'

const App = () => {
  return (
    <div className="search">
      <Search />
      <Team />
    </div>
  );
}

export default App;
