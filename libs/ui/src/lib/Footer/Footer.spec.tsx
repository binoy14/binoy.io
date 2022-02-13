import { render } from "@testing-library/react";

import { Footer } from "./Footer";

describe("Footer", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <footer
            class="bg-black px-10 py-2 text-white"
          >
            © 
            2022
             Tangential, LLC
          </footer>
        </div>
      </body>
    `);
  });
});
