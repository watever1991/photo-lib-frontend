import React from "react";
import { render } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  it("should render the login form", () => {
    const { getByLabelText } = render(<Login />);
  });
});
