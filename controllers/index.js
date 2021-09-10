import menuController from "./menu";
import pageController from "./page";
import contactController from "./contact";
import homeController from "./home";

const getControllerByType = (type) => {
	switch (type) {
		case "page":
			return pageController;
		case "contact":
			return contactController;
		case "home":
			return homeController;
		case "menu":
			return menuController;
		default:
			throw "Controller not found!";
	}
};

const getObjectBySlug = async (type, slug, preview) => {
	const controller = getControllerByType(type);
	const data = {... await controller.get(slug, preview),  _type:type, _slug:slug};
  return data;
};

const getPathBySlug = (type, slug) => {
  switch (type) {
		case "page":
			return `/${slug}`
		case "contact":
			return `/${slug}`
		case "home":
			return `/`
		case "menu":
			return `/${slug}`
		default:
			throw "Path not found!";
	}
};

export { menuController, pageController, contactController, homeController, getControllerByType, getObjectBySlug, getPathBySlug };
