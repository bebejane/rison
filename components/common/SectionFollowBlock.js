import { useState } from "react";
import styles from "./SectionFollowBlock.module.scss";
import cn from 'classnames'
import { Image } from "react-datocms";
import Markdown from "/components/common/Markdown";
import useVisibility from "/lib/hooks/useVisibility";

const SectionFollowBlock = ({ block, odd }) => {
	const [ref, { ratio, direction, wasVisible, wasPassed }] = useVisibility('follow', 300, 20);
	const height = wasPassed ? 100 : ratio < 0.8 ? ratio*60 : ratio*100
  const fadeUp = ratio > 0 || wasVisible ? styles.fadeUp : null
  
	return (
		<div className={cn(styles.wrapper)} >
			<article className={fadeUp} ref={ref}>
				<div className={styles.line} style={{height:`${height}%`}} ></div>
				<h3 className="tight">{block.shortHeadline}</h3>
				<h2 className="tight">{block.headline}</h2>
				<p><Markdown>{block.text}</Markdown></p>
			</article>
			<figure>{block.image && <Image data={block.image.responsiveImage} />}</figure>
		</div>
	);
};

export default SectionFollowBlock;
