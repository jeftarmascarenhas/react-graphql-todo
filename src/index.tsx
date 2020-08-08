import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App/App";
import { ApolloClient, ApolloProvider } from "@apollo/client";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { cache } from "./cache";

export const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/movies",
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
