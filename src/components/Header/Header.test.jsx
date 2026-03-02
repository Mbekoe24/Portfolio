import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./index";

describe("Header", () => {
  test("renders name and titles", () => {
    render(<Header />);
    expect(screen.getByText("Michael Bekoe")).toBeInTheDocument();
    expect(screen.getByText("Web Developer")).toBeInTheDocument();
    expect(screen.getByText("Front End Engineer")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument();
  });

  test("About link has correct href", () => {
    render(<Header />);
    const aboutLink = screen.getByRole("link", { name: /about/i });
    expect(aboutLink).toHaveAttribute("href", "#about");
  });

  test("Projects link has correct href", () => {
    render(<Header />);
    const projectsLink = screen.getByRole("link", { name: /projects/i });
    expect(projectsLink).toHaveAttribute("href", "#projects");
  });

  test("mobile menu button toggles nav visibility", () => {
    render(<Header />);
    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    const nav = screen.getByRole("navigation");

    expect(nav).not.toHaveClass("open");
    fireEvent.click(menuButton);
    expect(nav).toHaveClass("open");
    fireEvent.click(menuButton);
    expect(nav).not.toHaveClass("open");
  });
});
