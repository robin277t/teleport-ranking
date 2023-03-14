import React, { useState, useEffect } from "react";
import World from "./classes/World";
import Continent from "./classes/Continent";
import UrbanAreaData from "./classes/UrbanAreaData";
import ContinentsDropdown from "./components/ContinentsDropdown";
import "./styles.css";

const Controller = () => {
  const [continents, setContinents] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [topUrbanAreas, setTopUrbanAreas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Here is where you can change how many top urban areas to display:
  const maxDisplay = 5;

  useEffect(() => {
    const world = new World();
    world.fetchContinents().then(() => {
      setContinents(world.getContinents());
    });
  }, []);

  useEffect(() => {
    if (selectedContinent) {
      setIsLoading(true);
      const continent = new Continent(selectedContinent);
      continent.fetchUrbanAreas().then(() => {
        const urbanAreaData = new UrbanAreaData(
          selectedContinent,
          continent.getAllUrbanAreas(),
          maxDisplay
        );
        urbanAreaData.fetchAllUrbanAreaDetails().then(() => {
          setTopUrbanAreas(urbanAreaData.getTopUrbanAreas());
          setIsLoading(false);
        });
      });
    } else {
      setTopUrbanAreas([]);
    }
  }, [selectedContinent, maxDisplay]);

  const handleContinentSelect = (continent) => {
    setSelectedContinent(continent);
    setIsLoading(true);
  };

  return (
    <div>
      <h1>Hi! Welcome to Teleport Ranking, here to help you choose a new location.</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ContinentsDropdown
          continents={continents}
          maxDisplay={maxDisplay}
          onContinentSelect={handleContinentSelect}
          selectedContinent={selectedContinent}
          topUrbanAreas={topUrbanAreas}
        />
      )}
    </div>
  );
};

export default Controller;
