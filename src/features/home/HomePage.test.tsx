import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../app/layout/App";
import HomePage from "./HomePage";

test("renders the slide show and welcome message", () => {
  const { getByText, getByAltText } = render(<HomePage />);
  const welcomeMessage = getByText(/Welcome to our e-commerce site!/i);
  expect(welcomeMessage).toBeInTheDocument();
});
