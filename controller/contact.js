import { apiQuery } from "../lib/utils/api";

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
	get: async () => {
		const { contact } = await apiQuery(getQuery);
		return contact;
	},
};
