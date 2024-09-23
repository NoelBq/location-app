import { render } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

jest.mock("../../fake-api", () => ({
  fetchDestinations: jest.fn(),
}));

describe("SearchBar component", () => {
  it("renders without crashing", () => {
    render(
      <SearchBar
        onSelectDestination={jest.fn()}
        onClear={jest.fn()}
        loading={false}
        value={null}
      />
    );
  });
});
