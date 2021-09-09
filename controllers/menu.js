import { getQuery } from "../lib/utils/api";

const listQuery = `{
  allMenus{
    title,
    slug,
    page {
      ... on PageRecord {
        slug
        title
      }
    }
  }
}`

export default {
  all: async () =>{
    const {allMenus} = await getQuery(listQuery);
    return allMenus
  }
};