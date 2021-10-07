import styles from "./Partner.module.scss";
import { Markdown, SectionIntroSplit, SectionIntro, SectionWho, SectionCTA } from "/components/common";
import { GetPartner } from "/graphql";
import { withGlobalProps } from "/lib/utils";

export default function Partner({ page, contact, menu }) {
  const { intro, headline } = page;

  return (
    <>
      <SectionIntro intro={page.intro} headline={page.headline} />
      <SectionWho blocks={page.whoAreYou} />
      <SectionCTA text={page.cta} />
    </>
  );
}

export const getStaticProps = withGlobalProps({query: GetPartner, model: "partner"});