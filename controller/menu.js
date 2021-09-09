import { apiQuery } from "../lib/utils/api";

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
	all: async () => {
		const { allMenus } = await apiQuery(allQuery);
		return allMenus;
	},
};
