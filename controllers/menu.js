import { apiQuery } from "../lib/api";

const allMenusQuery = `
  menu: allMenus {
    title,
    slug,
    page {
      ... on PageRecord {
        slug
        title
      }
    }
  }
`;

export default {
	all: async (preview) => {
		const { menu } = await apiQuery(`{${allMenusQuery}}`, {}, preview);
		return menu;
	},
};

export {
  allMenusQuery
}