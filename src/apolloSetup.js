import {HttpLink} from 'apollo-link-http'
import {onError} from 'apollo-link-error'
import ApolloClient from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'

const getHeaders = () => {
  const headers = {};
  const token = window.localStorage.getItem('apollo-token');
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return headers;
};

// Create an http link:
const link = new HttpLink({
  uri: `${process.env.VUE_APP_URL}`,
  fetch,
  headers: getHeaders()
});

// Error Handling
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const defaultClient = new ApolloClient({
  link: errorLink.concat(link),
  cache: new InMemoryCache({
    addTypename: true
  })
});


export {
  defaultClient
}