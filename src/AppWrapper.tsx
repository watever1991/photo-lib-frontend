import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import client from "lib/clients/graphqlRequestClient";

const AppWrapper = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  );
};

export default AppWrapper;
