import styles from "./Invest.module.scss";
import { withGlobalProps } from "/lib/utils";
import { Button, SectionIntroSplit, SectionIntro, SectionWho, SectionCTA } from "/components/common";
import { GetInvest } from "/graphql";

export default function Invest({ page, contact, menu }) {
  const { intro, headline } = page;

  return (
    <>
      <SectionIntro intro={page.intro} headline={page.headline} />
      <SectionWho blocks={page.whoAreYou} />
      <SectionCTA text={page.cta} />
    </>
  );
}

export const getStaticProps = withGlobalProps({query: GetInvest, model: "invest"});