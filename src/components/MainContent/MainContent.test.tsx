import { render } from "@testing-library/react";
import { MainContent } from "./MainContent";

describe("MainContent component", () => {
  it("renders without crashing", () => {
    render(<MainContent />);
  });
});
