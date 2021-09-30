import OurOffer from "/components/pages/our-offer";
import { ourOfferController } from "/controllers";

export default OurOffer;

export async function getStaticProps({params, preview}) {
  const data = await ourOfferController.get(preview);
  return { props: {...data}, revalidate:10 }
}