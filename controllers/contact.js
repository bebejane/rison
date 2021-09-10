import { apiQuery } from "../lib/api";

const getQuery = `{
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
}`;

export default {
	get: async (slug = 'contact', preview) => {
		const { contact } = await apiQuery(getQuery, {}, preview);
		return contact;
	},
};
