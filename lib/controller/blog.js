import { SERVER_BASE_URL } from "../utils/constant";
import { request, gql } from 'graphql-request'

const allQuery = `{
  blog: entries(section: "blog", limit: 20) {
    title
    postDate @formatDateTime (format: "d/m/Y")
    ... on blog_blog_Entry {
      summary
    }
  }
}`

const BlogAPI = {
  all: async () => {
    const data = await request(API_ENDPOINT, allQuery, {});
    return data;
  }
};

export default BlogAPI;
