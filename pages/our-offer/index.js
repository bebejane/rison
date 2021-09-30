import OurOffer from "/components/pages/our-offer";
import { pageController } from "/controllers";

export default OurOffer;

export async function getStaticProps({params, preview}) {
  const data = await pageController.get('our-offer', preview);
  return { props: {...data}, revalidate:10 }
}