import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          planets.map((planeta) => {
            const { name, image } = planeta;
            return <PlanetCard key={ name } planetName={ name } planetImage={ image } />;
          })
        }
      </div>
    );
  }
}

export default SolarSystem;
