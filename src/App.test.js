import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio app", () => {
  render(<App />);
  const mainContent = document.querySelector(".App");
  expect(mainContent).toBeInTheDocument();
});

test("renders Main component with header", () => {
  render(<App />);
  const headings = screen.getAllByText(/Michael Bekoe/i);
  expect(headings.length).toBeGreaterThan(0);
});
