import styles from "./index.module.scss";
import Script from "next/script";
import { Markdown, SectionFollow, Button, SectionImageHeadline } from "/components/common";
import { withGlobalProps } from "/lib/utils";
import { GetHome } from "/graphql";
import { useRef } from "react";
import { useUI, UIAction } from "/lib/context/ui";

export default function Home({ page }) {
	const [ui, setUI] = useUI();
	const scrollRef = useRef();
	const handleScrollDown = () => scrollRef.current.scrollIntoView({ behavior: "smooth" });

	return (
		<>
			<Script src="https://polyfill.io/v3/polyfill.min.js?features=Element.prototype.scrollIntoView" />
			<div className={styles.container}>
				<section className={styles.intro}>
					<div className={styles.wrapper}>
						<div>
							<h2 className={styles["intro-header"]}>{page.header}</h2>
							<h2>{page.intro}</h2>
						</div>
						<div>
							<h3>This is how it works</h3>
							<h3 className={styles.scrollArrow} onClick={handleScrollDown}>
								↓
							</h3>
						</div>
					</div>
				</section>
				<SectionFollow blocks={page.blocks} ref={scrollRef} />
				<SectionImageHeadline blocks={page.sectionWebapp} />
				<section className={styles.outro}>
					<div className={styles.wrapper}>
						<h2>
							<Markdown>{page.ctaText}</Markdown>
						</h2>
						<Button label={"Contact us"} onClick={() => setUI({ type: UIAction.SHOW_CONTACT })} />
						<div>
							<Markdown>{page.readMoreText}</Markdown> <span>→</span>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export const getStaticProps = withGlobalProps({ query: GetHome, model: "home" });
