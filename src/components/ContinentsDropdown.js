import React from "react";
import UrbanAreasList from "./UrbanAreasList";
import "../styles.css";

const ContinentsDropdown = ({
  continents,
  onContinentSelect,
  maxDisplay,
  selectedContinent,
  topUrbanAreas,
}) => {
  const handleSelect = (event) => {
    const continentId = event.target.value;
    onContinentSelect(continentId);
  };

  return (
    <div>
      <h2>Continent:</h2>
      <select onChange={handleSelect} value={selectedContinent || ""}>
        <option disabled value="">
          Select a continent
        </option>
        {continents.map((continent) => (
          <option key={continent.continentId} value={continent.continentId}>
            {continent.name}
          </option>
        ))}
      </select>
      {topUrbanAreas.length > 0 && (
        <UrbanAreasList topUrbanAreas={topUrbanAreas} />
      )}
    </div>
  );
};

export default ContinentsDropdown;
