import { client } from "../utils/api";

const listQuery = `{
  allMenus{
    title
  }
}`

export default {
  get: async () =>{
    const {allMenus} = await client.request(listQuery);
    return allMenus
  }
};