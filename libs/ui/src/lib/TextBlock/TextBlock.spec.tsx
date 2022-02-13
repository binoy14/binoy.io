import { render } from "@testing-library/react";

import { TextBlock } from "./TextBlock";

describe("TextBlock", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TextBlock header="test" subtext="sub header" />);
    expect(baseElement).toMatchSnapshot();
  });
});
