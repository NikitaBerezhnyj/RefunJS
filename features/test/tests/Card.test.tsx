import React from "react";
import { render, screen } from "@testing-library/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "../src/components/Card/Card";

describe("Card component", () => {
  it("renders children correctly", () => {
    render(
      <Card>
        <p>Content</p>
      </Card>
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies base card class", () => {
    const { container } = render(<Card>Test</Card>);
    expect(container.firstChild).toHaveClass("card");
  });

  it("applies hoverable class when hoverable=true", () => {
    const { container } = render(<Card hoverable>Hoverable content</Card>);
    expect(container.firstChild).toHaveClass("hoverable");
  });

  it("applies custom className", () => {
    const { container } = render(<Card className="custom">Custom</Card>);
    expect(container.firstChild).toHaveClass("custom");
  });
});

describe("CardHeader component", () => {
  it("renders children", () => {
    render(<CardHeader>Header content</CardHeader>);
    expect(screen.getByText("Header content")).toBeInTheDocument();
  });

  it("applies header class", () => {
    const { container } = render(<CardHeader>Header</CardHeader>);
    expect(container.firstChild).toHaveClass("header");
  });

  it("applies custom className", () => {
    const { container } = render(
      <CardHeader className="extra">Header</CardHeader>
    );
    expect(container.firstChild).toHaveClass("extra");
  });
});

describe("CardBody component", () => {
  it("renders children", () => {
    render(<CardBody>Body content</CardBody>);
    expect(screen.getByText("Body content")).toBeInTheDocument();
  });

  it("applies body class", () => {
    const { container } = render(<CardBody>Body</CardBody>);
    expect(container.firstChild).toHaveClass("body");
  });

  it("applies custom className", () => {
    const { container } = render(<CardBody className="special">Body</CardBody>);
    expect(container.firstChild).toHaveClass("special");
  });
});

describe("CardFooter component", () => {
  it("renders children", () => {
    render(<CardFooter>Footer content</CardFooter>);
    expect(screen.getByText("Footer content")).toBeInTheDocument();
  });

  it("applies footer class", () => {
    const { container } = render(<CardFooter>Footer</CardFooter>);
    expect(container.firstChild).toHaveClass("footer");
  });

  it("applies custom className", () => {
    const { container } = render(
      <CardFooter className="bottom">Footer</CardFooter>
    );
    expect(container.firstChild).toHaveClass("bottom");
  });
});
