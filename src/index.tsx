import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App/App";
import { ApolloClient, ApolloProvider } from "@apollo/client";

import * as serviceWorker from "./serviceWorker";
import { cache } from "./cache";

export const client = new ApolloClient({
  cache,
  connectToDevTools: true,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
