import { apiQuery } from "../lib/api";
import { getPageQuery } from "./page";
import { getContactQuery } from "./contact";
import { allMenusQuery } from "./menu";

const getOurOfferQuery = `
  page: ourOffer {
    intro
    id
   blocks {
      headline
      text(markdown: false)
      image {
        alt
        author
        basename
        blurUpThumb
        blurhash
        format
        height
        id
        size
        title
        url
        width
        responsiveImage(sizes: "") {
          alt
          aspectRatio
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
`;

const getOurOffer = `
  query getOurOffer {
    ${getOurOfferQuery}
    ${allMenusQuery}
    ${getContactQuery}
  }
`;


export default {
	get: async (preview) => {
    const data = await apiQuery(getOurOffer, {}, preview);
    console.log(data)
		const { contact, menu, page } = data
		return { contact, menu, page};
	},
};

export {
  getOurOfferQuery
}