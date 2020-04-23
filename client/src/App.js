import React from 'react';
import Header from './components/headerComponent';
import WeatherDisplay from './components/weatherDisplay';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherDisplay />
    </div>
  );
}

export default App;
