import { apiQuery } from "../lib/utils/api";

const allQuery = `{
  allPages{
    title
    slug
    intro
  }
}`;

const getQuery = `
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
		const { allPages } = await apiQuery(allQuery);
		return allPages;
	},
	get: async (slug) => {
		const { page } = await apiQuery(getQuery, { slug });
		return page;
	},
};
