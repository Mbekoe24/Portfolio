import { render, screen, fireEvent } from "@testing-library/react";
import Projects from "./index";

describe("Projects", () => {
  test("renders Projects section title", () => {
    render(<Projects />);
    expect(screen.getByRole("heading", { name: /projects/i })).toBeInTheDocument();
  });

  test("renders first project by default", () => {
    render(<Projects />);
    expect(screen.getByText("Netflix Clone 2.0")).toBeInTheDocument();
  });

  test("renders carousel navigation buttons", () => {
    render(<Projects />);
    expect(screen.getByRole("button", { name: /previous project/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /next project/i })).toBeInTheDocument();
  });

  test("next button advances to next project", () => {
    render(<Projects />);
    expect(screen.getByText("Netflix Clone 2.0")).toBeInTheDocument();

    const nextButton = screen.getByRole("button", { name: /next project/i });
    fireEvent.click(nextButton);

    expect(screen.getByText("Anchoi Restaurant Website")).toBeInTheDocument();
  });

  test("prev button goes to previous project", () => {
    render(<Projects />);
    const nextButton = screen.getByRole("button", { name: /next project/i });
    fireEvent.click(nextButton);
    expect(screen.getByText("Anchoi Restaurant Website")).toBeInTheDocument();

    const prevButton = screen.getByRole("button", { name: /previous project/i });
    fireEvent.click(prevButton);

    expect(screen.getByText("Netflix Clone 2.0")).toBeInTheDocument();
  });

  test("renders View link for project", () => {
    render(<Projects />);
    const viewLinks = screen.getAllByRole("link", { name: /view/i });
    expect(viewLinks.length).toBeGreaterThan(0);
    expect(viewLinks[0]).toHaveAttribute("target", "_blank");
    expect(viewLinks[0]).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("renders project tech chips", () => {
    render(<Projects />);
    const reactChips = screen.getAllByText("React");
    const jsChips = screen.getAllByText("Javascript");
    expect(reactChips.length).toBeGreaterThan(0);
    expect(jsChips.length).toBeGreaterThan(0);
  });
});
