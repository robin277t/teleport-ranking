import React from "react";
import { render, screen } from "@testing-library/react";
import UrbanAreasList from "../../components/UrbanAreasList";

xdescribe("Block6: UrbanAreasList component", () => {
  const topUrbanAreas = [
    {
      name: "New York",
      teleport_city_score: 80.3,
      summary: "some city in US",
    },
    {
      name: "London",
      teleport_city_score: 85.6,
      summary: "a UK city.",
    },
    {
      name: "Tokyo",
      teleport_city_score: 90.2,
      summary: "Japan city",
    },
  ];

  it("test1- render the list of urban areas", () => {
    render(<UrbanAreasList topUrbanAreas={topUrbanAreas} />);
    const urbanAreaList = screen.getByRole("list");
    expect(urbanAreaList).toBeInTheDocument();
    const urbanAreaItems = screen.getAllByRole("listitem");
    expect(urbanAreaItems.length).toBe(topUrbanAreas.length);
  });

  it("test2- display the name, score, and summary of each urban area", () => {
    render(<UrbanAreasList topUrbanAreas={topUrbanAreas} />);
    topUrbanAreas.forEach((urbanArea) => {
      const name = screen.getByText(urbanArea.name);
      expect(name).toBeInTheDocument();
      const score = screen.getByText(
        `Score: ${urbanArea.teleport_city_score.toFixed(1)}`
      );
      expect(score).toBeInTheDocument();
      const summary = screen.getByText(urbanArea.summary);
      expect(summary).toBeInTheDocument();
    });
  });
});
