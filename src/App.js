import React from 'react';
import PositivesList from './pages/PositivesList.jsx'
import Panel from './components/Panel.jsx'
import Data from "./data/positives.json"
import './App.css';
import './styles/fonts.css'
import './styles/common.css'

function App() {
  return (
    <div className="App">
      <Panel/>
      <PositivesList
        positives={Data}
        />
    </div>
  );
}

export default App;
