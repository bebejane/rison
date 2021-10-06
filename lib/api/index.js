
import { GRAPHQL_API_ENDPOINT, GRAPHQL_PREVIEW_API_ENDPOINT, GRAPHQL_API_TOKEN } from "../utils/constant";
import { gql, GraphQLClient } from "graphql-request"
import * as AllQueries from "/graphql";

const headers = {headers: { authorization: 'Bearer ' + GRAPHQL_API_TOKEN}}
const client = new GraphQLClient(GRAPHQL_API_ENDPOINT, headers)
const previewClient = new GraphQLClient(GRAPHQL_PREVIEW_API_ENDPOINT, headers)

const apiQuery = async (query, params = {}, preview = false) => {
  if(!query) throw "Invalid Query!"
    
  if(Array.isArray(query)){
    const reqs = query.map((q,idx) => apiQuery(q, Array.isArray(params) ? params[idx] : params, preview))
    const res = await Promise.all(reqs)
    let data = {}; 
    res.forEach((r)=> data = {...data, ...r})
    return data
  }
  return preview === true ? previewClient.request(query, params) : client.request(query, params)
}

const getQueryByType = (type) => {
  switch (type) {
    case 'home':
      return AllQueries.GetHome;
    case 'menu':
      return AllQueries.GetMenu;
    case 'contact':
      return AllQueries.GetContact;
    case 'ourOffer':
      return AllQueries.GetOurOffer;
  }
  throw `Query type ${type} doesn't exist!`
};
const getObjectBySlug = async (type, slug, preview) => {
	const query = getQueryByType(type);
	const data = await apiQuery(query, {}, preview)
  return {...data,  _type:type, _slug:slug};
};

const getPathBySlug = (type, slug) => {
  switch (type) {
		case "home":
			return `/`
		case "ourOffer":
			return `/${slug}`
		case "contact":
			return `/${slug}`
    case "menu":
			return `/${slug}`
		default:
			throw `Path ${type} not found!`;
	}
};

export {
  client,
  apiQuery,
  getObjectBySlug,
  getPathBySlug
}
