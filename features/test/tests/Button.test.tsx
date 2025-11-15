import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../src/components/Button/Button";

describe("Button component", () => {
  test("renders with children text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies correct variant class", () => {
    const { container } = render(<Button variant="secondary">Test</Button>);
    const button = container.querySelector("button");
    expect(button?.className).toMatch(/secondary/);
  });

  test("applies correct size class", () => {
    const { container } = render(<Button size="lg">Test</Button>);
    const button = container.querySelector("button");
    expect(button?.className).toMatch(/lg/);
  });

  test("merges custom className with existing styles", () => {
    const { container } = render(<Button className="custom">Test</Button>);
    const button = container.querySelector("button");
    expect(button?.className).toMatch(/custom/);
  });
});
