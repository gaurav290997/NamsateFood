import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });
  // afterAll(() => {
  //   console.log("After All");
  // });
  // afterEach(() => {
  //   console.log("After Each");
  // });

  test("Should load Contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact us component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should load sumbit inside Contact us component", () => {
    render(<Contact />);
    const text = screen.getByText("Submit");
    expect(text).toBeInTheDocument();
  });

  test("Should load input name Contact us component", () => {
    render(<Contact />);
    const text = screen.getByPlaceholderText("Name");
    expect(text).toBeInTheDocument();
  });

  test("Should load  2 input boxes Contact us component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
