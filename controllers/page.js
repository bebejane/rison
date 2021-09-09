import { getQuery } from "../lib/utils/api";

const allQuery = `{
  allPages{
    title,
    slug
  }
}`

const getOneQuery = `
  query getPage($slug: String!){
    page(filter: {slug: {eq: $slug}}){
      title
      slug
    } 
  }
`
export default {
  all: async () =>{
    const {allPages} = await getQuery(allQuery);
    return allPages
  },
  get: async (slug) =>{
    console.log(slug)
    const page = await getQuery(getOneQuery, {slug});
    return page
  }
};