import Home from '../'
import {homeController} from "../../controllers";

export default Home;

export async function getStaticProps({preview}) {
  const data = await homeController.get(preview)
  return { props: {...data}, revalidate:10 }
}