import Content from "/components/common/Content";
import styles from './OurOffer.module.scss'
import { Image } from "react-datocms";

export default function OurOffer({page, contact, menu}) {
	const {intro, blocks} = page;
	return (
		<Content page={page} contact={contact} menu={menu}>
      {page.intro}
			{blocks.map(({image, headline, desc})=>
				<div>
					<h1>{headline}</h1>
					<div>{desc}</div>
					<Image data={image.responsiveImage} />}
				</div>
			)}
		</Content>
	);
}
