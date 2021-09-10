import { GRAPHQL_API_ENDPOINT, GRAPHQL_PREVIEW_API_ENDPOINT, GRAPHQL_API_TOKEN } from "../utils/constant";
import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(GRAPHQL_API_ENDPOINT, {
  headers: {
    authorization: 'Bearer ' + GRAPHQL_API_TOKEN,
  },
})
const previewClient = new GraphQLClient(GRAPHQL_PREVIEW_API_ENDPOINT, {
  headers: {
    authorization: 'Bearer ' + GRAPHQL_API_TOKEN,
  },
})

const apiQuery = (query, params, preview) => {
  return preview === true ? previewClient.request(query, params) : client.request(query, params)
}
const apiQueries = async (...args) => {
  const data = await Promise.all(args.map(q=>client.request(typeof q === 'string' ? q : q.q, typeof q === 'string' ? {} : q.p)))
  let obj = {}
  data.forEach( o => obj = {...obj, ...o})
  return obj
}
export {
  client,
  apiQuery,
  apiQueries
};
