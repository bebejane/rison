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

const apiQuery = async (query, params, preview) => {
  if(Array.isArray(query)){
    const reqs = query.map((q,idx) => apiQuery(q, params && params.length-1 > idx ? params[idx] : {}, preview))
    const res = await Promise.all(reqs)
    let result = {}
    res.forEach((r)=> result = {...result, ...r})
    return result
  }

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
