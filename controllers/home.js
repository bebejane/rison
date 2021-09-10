import { apiQuery, apiQueries } from "../lib/api";

const getHome = `
  query getHome {
    home {
      header
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
      }
    } 
  }
`;

export default {
	get: async (slug = 'home', preview) => {
		const { home } = await apiQuery(getHome, {}, preview);
		return home;
	}
};

export {
  getHome
}