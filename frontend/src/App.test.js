import { render, screen } from "@testing-library/react";
import Home from "./Components/Home/Home";

test("renders home page content", () => {
  render(<Home />);
  const headingElement = screen.getByText(
    /campus merchandise management with a cleaner workflow\./i,
  );
  expect(headingElement).toBeInTheDocument();
});
