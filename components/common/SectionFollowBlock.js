import React, { useState } from "react";
import styles from "./SectionFollowBlock.module.scss";
import cn from 'classnames'
import { Image } from "react-datocms";
import Markdown from "/components/common/Markdown";
import Reveal from "components/fx/Reveal";
import useVisibility from "/lib/hooks/useVisibility";

const SectionFollowBlock = ({ block, odd }) => {
	const [ref, { ratio, direction, wasVisible, wasPassed }] = useVisibility('follow', 0, 100);
	const height = wasPassed ? 100 : ratio < 1 ? ratio * 75 : ratio * 100

	return (
		<div className={cn(styles.wrapper)} ref={ref}>
			<article>
				<Reveal effect="fadeUp" distance={20} duration={1000} fade={true}>
					<h3 className="tight">{block.shortHeadline}</h3>
					<h2 className="tight">{block.headline}</h2>
					<p><Markdown>{block.text}</Markdown></p>
				</Reveal>
				<div className={styles.line} ></div>
			</article>
			<figure>{block.image && <Image data={block.image.responsiveImage} />}</figure>
		</div>
	);
};

export default SectionFollowBlock;
