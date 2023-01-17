import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const token = localStorage.getItem("token");

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    headers: {
      authorization: token ? `JWT ${localStorage.getItem("token")}` : "",
    },
  }),
});

export default client;
