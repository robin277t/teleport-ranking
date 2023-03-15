import React, { useState, useEffect } from "react";
import ContinentsDropdown from "./components/ContinentsDropdown";
import "./styles.css";
//require fetch?

const App = () => {
  const [continents, setContinents] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [topUrbanAreas, setTopUrbanAreas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8082/");
      const data = await response.json();
      setContinents(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedContinent) {
      setIsLoading(true);
      const fetchDetailData = async () => {
        const response = await fetch(
          `http://localhost:8082/continent?continentId=${selectedContinent}`
          );
          const dataDetail = await response.json();
        setTopUrbanAreas(dataDetail);
        setIsLoading(false);
      };
      fetchDetailData();
    } else {
      setTopUrbanAreas([]);
    }
  }, [selectedContinent]);

  const handleContinentSelect = (continent) => {
    setSelectedContinent(continent);
    setIsLoading(true);
  };

  return (
    <div>
      <h1>
        Hi! Welcome to Teleport Ranking, here to help you choose a new location.
      </h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ContinentsDropdown
          continents={continents}
          onContinentSelect={handleContinentSelect}
          selectedContinent={selectedContinent}
          topUrbanAreas={topUrbanAreas}
        />
      )}
    </div>
  );
};

export default App;
