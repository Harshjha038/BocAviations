import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getAccessToken } from "./utilities/getAccessToken";

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await getAccessToken();

  // return the headers to be used in the HTTP request
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
