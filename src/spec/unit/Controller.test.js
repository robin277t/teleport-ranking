import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Controller from "../../Controller";

xdescribe("Block4: Controller component", () => {
  it("test1 - should display the header", () => {
    render(<Controller />);
    const header = screen.getByRole("heading", { level: 1 });
    expect(header).toBeInTheDocument();
    expect(header.textContent).toContain("choose");
  });

  it("test2- display the continents dropdown", () => {
    render(<Controller />);
    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toBeInTheDocument();
  });

  it("test3- no display of urban areas when no continent is selected", () => {
    render(<Controller />);
    const topUrbanAreas = screen.queryAllByRole("listitem");
    expect(topUrbanAreas.length).toEqual(0);
  });

  it("test4- display top urban areas loading screen when a continent is selected", () => {
    render(<Controller />);
    const dropdown = screen.getByRole("combobox");
    fireEvent.change(dropdown, { target: { value: "Africa" } });
    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeInTheDocument();
  });
});
