import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './components/MainComponent';

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <MainComponent/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
