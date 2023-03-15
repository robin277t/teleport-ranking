import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

xdescribe("Block4: App component", () => {
  it("test1 - should display the header", () => {
    render(<App />);
    const header = screen.getByRole("heading", { level: 1 });
    expect(header).toBeInTheDocument();
    expect(header.textContent).toContain("choose");
  });

  it("test2- display the continents dropdown", () => {
    render(<App />);
    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toBeInTheDocument();
  });

  it("test3- no display of urban areas when no continent is selected", () => {
    render(<App />);
    const topUrbanAreas = screen.queryAllByRole("listitem");
    expect(topUrbanAreas.length).toEqual(0);
  });

  it("test4- display top urban areas loading screen when a continent is selected", () => {
    render(<App />);
    const dropdown = screen.getByRole("combobox");
    fireEvent.change(dropdown, { target: { value: "Africa" } });
    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeInTheDocument();
  });
});
