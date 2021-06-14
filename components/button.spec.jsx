import { mount } from "@cypress/react";
import Button from "./button";

describe("<button>", () => {
  it("is a button", () => {
    mount(<Button />);
  });
});
