import { apiQuery, apiQueries } from "../lib/api";
import { getContactQuery } from "./contact";
import { allMenusQuery } from "./menu";

const getHomeQuery = `
  page: home {
    header
    intro
    blocks {
      ... on ImageWithHeadlineAndShortDescRecord {
        id
        desc
        headline
        image {
          responsiveImage {
            aspectRatio
            alt
            base64
            bgColor
            height
            sizes
            src
            srcSet
            title
            webpSrcSet
            width
          }
        }
      }
      ... on ImageWithHeadlineRecord {
        id
        shortHeadline
        updatedAt
        bigHeadline
        image {
          responsiveImage {
            aspectRatio
            alt
            base64
            bgColor
            height
            sizes
            src
            srcSet
            title
            webpSrcSet
            width
          }
        }
      }
    }
  }
`
const getHome = `
  query getHome {
    ${getHomeQuery}
    ${getContactQuery}
    ${allMenusQuery}
  }
`;

export default {
	get: async (preview) => {
		return await apiQuery(getHome, {}, preview);
	}
};

export {
  getHomeQuery
}