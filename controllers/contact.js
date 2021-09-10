import { apiQuery } from "../lib/api";
import { getPageQuery } from "./page";
import { allMenusQuery } from "./menu";

const getContactQuery = `
  contact {
    address
    facebook
    headline
    id
    instagram
    slug
    text(markdown: false)
    title
    twitter
  }
`;

const getContact = `
  query getContact {
    ${getContactQuery}
    ${allMenusQuery}
  }
`;


export default {
	get: async (preview) => {
		const { contact, menu } = await apiQuery(getContact, {}, preview);
		return {contact, menu};
	},
};

export {
  getContactQuery
}