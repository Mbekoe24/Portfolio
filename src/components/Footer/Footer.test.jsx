import { render, screen } from "@testing-library/react";
import Footer from "./index";

describe("Footer", () => {
  test("renders social links", () => {
    render(<Footer />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

    expect(githubLink).toHaveAttribute("href", "https://github.com/Mbekoe24");
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/michaelbekoe/");
  });

  test("renders copyright", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 Michael Bekoe/i)).toBeInTheDocument();
  });

  test("renders built with message", () => {
    render(<Footer />);
    expect(screen.getByText(/Website built with/i)).toBeInTheDocument();
  });
});
