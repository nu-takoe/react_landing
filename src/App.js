import React from 'react'
import './App.scss';
import Content from './Content/Content';
import Header from './Header/Header'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div className='content'>
        <Content />
      </div>
    </div>
  );
}

export default App;
