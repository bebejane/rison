import { SERVER_BASE_URL, GRAPHQL_API_TOKEN } from "./constant";
import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(SERVER_BASE_URL, {
  headers: {
    authorization: 'Bearer ' + GRAPHQL_API_TOKEN,
  },
})
const getQuery = (query, params) => client.request(query, params);
export {
  client,
  getQuery
};
