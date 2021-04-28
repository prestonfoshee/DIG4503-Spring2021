import React from 'react';
import './App.css';
import AddBook from './components/AddBook';
import SearchOne from './components/SearchOne';
import SearchMany from './components/SearchMany';
import DeleteOne from './components/DeleteOne';

function App() {
  return (
    <div className="App">
      <AddBook />
      <div>
        <div>
          <SearchOne />
        </div>
        <div>
          <SearchMany />
        </div>
      </div>
      <div>
        <DeleteOne />
      </div>
    </div >
  );
}

export default App;
