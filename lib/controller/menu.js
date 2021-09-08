import { client } from "../utils/api";

const listQuery = `{
  allMenus{
    title,
    page {
      ... on PageRecord {
        slug
        title
      }
    }
  }
}`

export default {
  get: async () =>{
    const {allMenus} = await client.request(listQuery);
    return allMenus
  }
};