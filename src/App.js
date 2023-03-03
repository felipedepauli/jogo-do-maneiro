import React from 'react';
import logo from './logo.svg';
import PositivesList from './pages/PositivesList.jsx'
import Data from "./data/positives.json"
import './App.css';
import './styles/fonts.css'

function App() {
  return (
    <div className="App">
		<PositivesList
			positives={Data}
			/>
    </div>
  );
}

export default App;
