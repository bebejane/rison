import Invest from "/components/pages/invest";
import { pageController } from "/controllers";

export default Invest;

export async function getStaticProps({params, preview}) {
  const data = await pageController.get('our-offer', preview);
  return { props: {...data}, revalidate:10 }
}