import { apiQuery, apiQueries } from "../lib/api";

const getAllPages = `
  query getAllPages {
    allPages{
      title
      slug
      intro
    }
  }
`;

const getPage = `
  query getPage($slug: String!){
    page(filter: {slug: {eq: $slug}}){
      title
      slug
      intro
      blocks {
        ... on ImageWithHeadlineAndShortDescRecord {
          id
          desc
          headline
          image {
            responsiveImage {
              srcSet
              webpSrcSet
              sizes
              src
              width
              height
              aspectRatio
              alt
              title
              base64
            }
          }
        }
        ... on ImageWithHeadlineRecord {
          id
          shortHeadline
          updatedAt
          bigHeadline
        }
      }
    } 
  }
`;

export default {
	all: async () => {
		const { allPages } = await apiQuery(getAllPages);
		return allPages;
	},
	get: async (slug, preview) => {
		const { page } = await apiQuery(getPage, { slug }, preview);
		return page;
	},
  both: async (slug = 'start') =>{
    const data = await apiQueries({q:getPage, p:{slug}}, getAllPages);
    return data;
  }
};

export {
  getPage,
  getAllPages
}