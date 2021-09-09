import { GRAPHQL_API_ENDPOINT, GRAPHQL_API_TOKEN } from "./constant";
import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(GRAPHQL_API_ENDPOINT, {
  headers: {
    authorization: 'Bearer ' + GRAPHQL_API_TOKEN,
  },
})
const getQuery = (query, params) => client.request(query, params);
export {
  client,
  getQuery
};
