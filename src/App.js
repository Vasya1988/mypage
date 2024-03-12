import React from 'react';
import './App.css';
import MainFrame from './containers/MainFrame';

function App(props) {
  // document.documentElement.classList.add('darkMode')
  // setTimeout(() => {document.documentElement.classList.remove('darkMode')}, 1000)
 
  return (
    <div className="App">
      <MainFrame />
      
    </div>
  );
}

export default App;