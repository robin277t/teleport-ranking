import React from "react";
import { render, screen } from "@testing-library/react";
import ContinentsDropdown from "../../components/ContinentsDropdown";

describe("Block5: ContinentsDropdown component", () => {
  const continents = [
    {
      continentId: "geonames:AF",
      name: "Africa",
    },
    {
      continentId: "geonames:AS",
      name: "Asia",
    },
  ];

  const topUrbanAreas = [
    {
      name: "lagos",
      summary: "A long string",
      teleport_city_score: 7.5,
    },
    {
      name: "cairo",
      summary: "A long string",
      teleport_city_score: 8.53453,
    },
  ];

  it("test1 - displays the header", () => {
    render(
      <ContinentsDropdown
        continents={continents}
        topUrbanAreas={topUrbanAreas}
      />
    );
    const header = screen.getByRole("heading", { level: 2 });
    expect(header).toBeInTheDocument();
    expect(header.textContent).toEqual("Continent:");
  });

  it("test2 - displays the continents dropdown", () => {
    render(
      <ContinentsDropdown
        continents={continents}
        topUrbanAreas={topUrbanAreas}
      />
    );
    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toBeInTheDocument();
  });
});
