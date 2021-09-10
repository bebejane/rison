import { apiQuery } from "../lib/api";

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

export default {
	get: async (preview) => {
		const { contact } = await apiQuery(`{${getContactQuery}}`, {}, preview);
		return contact;
	},
};

export {
  getContactQuery
}