import { render } from "@testing-library/react";

import { Footer } from "./Footer";

describe("Footer", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <footer
            class="container mt-10 bg-black py-4 text-white"
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
