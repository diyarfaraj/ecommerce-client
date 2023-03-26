import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

jest.mock("../catalog/catalogSlice");

test("renders the slide show and welcome message", () => {
  const { getByText, getByAltText } = render(<HomePage />);
  const welcomeMessage = screen.getByText(/Welcome to our e-commerce site!/i);
  expect(welcomeMessage).toBeInTheDocument();
});
