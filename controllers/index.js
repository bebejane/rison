import menuController from "./menu";
import pageController from "./page";
import contactController from "./contact";
import homeController from "./home";
import ourOfferController from "./ourOffer";

const controllers = {
	'page': pageController,
	'menu': menuController,
	'contact' : contactController,
	'home': homeController,
}

const getControllerByType = (type) => {
	if(!controllers[type])
		throw `Controller ${type} doesn't exist!`
	return controllers[type] 
};

const getObjectBySlug = async (type, slug, preview) => {
	const controller = getControllerByType(type);
	const data = controller.get.length > 1 ? await controller.get(slug, preview) : await controller.get(preview)
  return {...data,  _type:type, _slug:slug};
};

const getPathBySlug = (type, slug) => {
  switch (type) {
		case "home":
			return `/`
		case "page":
			return `/${slug}`
		case "contact":
			return `/${slug}`
		case "menu":
			return `/${slug}`
		default:
			throw `Path ${type} not found!`;
	}
};

export { 
	menuController, 
	pageController, 
	contactController, 
	homeController,
	ourOfferController, 
	getControllerByType, 
	getObjectBySlug, 
	getPathBySlug 
};
