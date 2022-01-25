import React, { Component } from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import PlanetCard from './components/PlanetCard';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <SolarSystem />
        <PlanetCard />
      </main>
    );
  }
}

export default App;
