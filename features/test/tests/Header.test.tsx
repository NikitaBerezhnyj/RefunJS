import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from "../src/components/Header/Header";

describe("Header component", () => {
  test("renders logo and navigation links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText("RefunJS")).toBeInTheDocument();
    expect(screen.getByText("Головна")).toBeInTheDocument();
    expect(screen.getByText("Демо")).toBeInTheDocument();
  });

  test("applies active class to the current route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByText("Головна");
    const demoLink = screen.getByText("Демо");

    expect(homeLink.className).toMatch(/active/);
    expect(demoLink.className).not.toMatch(/active/);
  });

  test("applies active class when on /demo route", () => {
    render(
      <MemoryRouter initialEntries={["/demo"]}>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByText("Головна");
    const demoLink = screen.getByText("Демо");

    expect(homeLink.className).not.toMatch(/active/);
    expect(demoLink.className).toMatch(/active/);
  });
});
