import About from "/components/pages/about";
import { pageController } from "/controllers";

export default About;

export async function getStaticProps({params, preview}) {
  const data = await pageController.get('our-offer', preview);
  return { props: {...data}, revalidate:10 }
}