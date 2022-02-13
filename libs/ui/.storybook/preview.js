import "./tailwind.css";

import { RouterContext } from "next/dist/shared/lib/router-context";

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

if (module.hot) {
  module.hot.accept();
}
