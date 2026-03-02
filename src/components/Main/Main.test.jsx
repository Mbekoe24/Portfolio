import { render, screen } from "@testing-library/react";
import Main from "./index";

describe("Main", () => {
  test("renders Header with name", () => {
    render(<Main />);
    expect(screen.getByRole("heading", { level: 1, name: "Michael Bekoe" })).toBeInTheDocument();
  });

  test("renders About section", () => {
    render(<Main />);
    expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
  });

  test("renders Projects section", () => {
    render(<Main />);
    expect(screen.getByRole("heading", { name: /projects/i })).toBeInTheDocument();
  });

  test("renders Footer with copyright", () => {
    render(<Main />);
    expect(screen.getByText(/© 2026 Michael Bekoe/i)).toBeInTheDocument();
  });
});
