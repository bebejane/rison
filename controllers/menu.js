import { apiQuery } from "../lib/api";

const allQuery = `{
  allMenus{
    title,
    slug,
    page {
      ... on PageRecord {
        slug
        title
      }
    }
  }
}`;

export default {
	all: async (slug = 'menu', preview) => {
		const { allMenus } = await apiQuery(allQuery, {}, preview);
		return allMenus;
	},
};
