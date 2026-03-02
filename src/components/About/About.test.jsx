import { render, screen } from "@testing-library/react";
import About from "./index";

describe("About", () => {
  test("renders section title", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
  });

  test("renders profile information", () => {
    render(<About />);
    expect(screen.getByText("Michael Bekoe")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer II")).toBeInTheDocument();
    expect(screen.getByText(/SUNY Geneseo/i)).toBeInTheDocument();
  });

  test("renders social links", () => {
    render(<About />);
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/Mbekoe24"
    );
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/michaelbekoe/"
    );
  });

  test("renders Resume button", () => {
    render(<About />);
    expect(screen.getByRole("button", { name: /resume/i })).toBeInTheDocument();
  });

  test("renders about text content", () => {
    render(<About />);
    expect(screen.getByText(/Software Engineer and Front End Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/BMO Harris Bank/i)).toBeInTheDocument();
    expect(screen.getByText(/React, TypeScript/i)).toBeInTheDocument();
  });
});
