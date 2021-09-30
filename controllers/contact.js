import { apiQuery } from "../lib/api";
import { getPageQuery } from "./page";
import { allMenusQuery } from "./menu";

const getContactQuery = `
  contact {
    address
    facebook
    id
    instagram
    slug
    headlineGeneral
    headlineCareer
    textGeneral(markdown: false)
    textCareer(markdown: false)
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