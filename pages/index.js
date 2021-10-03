import styles from "./index.module.scss";
import { Content, Markdown, SectionFollow, Button, SectionImageHeadline } from "/components/common";
import { apiQuery } from "/lib/api";
import { GetHome, GetMenu, GetContact } from "/graphql";
import { useRef } from "react";
import { useUI, UIAction } from "/lib/context/ui";
import { REVALIDATE_TIME } from "lib/utils/constant";

export default function Home({ page, contact, menu }) {
	const [ui, setUI] = useUI();
	const scrollRef = useRef();
	const handleScrollDown = () => scrollRef.current.scrollIntoView({ behavior: "smooth" });

	return (
		<Content page={page} contact={contact} menu={menu}>
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
							<div><Markdown>{page.readMoreText}</Markdown> <span>→</span></div>
					</div>
				</section>
			</div>
		</Content>
	);
}

export async function getStaticProps({ preview }) {
  const queries = [GetHome, GetMenu, GetContact];
  const data = await apiQuery(queries, {}, preview);
	return { props: { ...data }, revalidate: REVALIDATE_TIME };
}
