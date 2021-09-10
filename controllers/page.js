import { apiQuery, apiQueries } from "../lib/api";
import { menuController, contactController } from "./";
import { getContactQuery } from "./contact";
import { allMenusQuery } from "./menu";

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
    ${getContactQuery}
    ${allMenusQuery}
  }
`;

export default {
	all: async () => {
		const { allPages } = await apiQuery(getAllPages);
		return allPages;
	},
	get: async (slug, preview) => {
    console.log(slug)
		const data = await apiQuery(getPage, { slug }, preview);
		return data;
	}
};

export {
  getPage,
  getAllPages
}