import Home from '/components/pages/home'
import {homeController} from "/controllers";
import { apiQuery } from '/lib/api';
import { GetHome } from '/graphql/home';
import { GetMenu } from '/graphql/menu';
import { GetContact } from '/graphql/contact';

export default Home;

export async function getStaticProps({preview}) {
  const data = await homeController.get(preview)
  const test = await apiQuery([GetHome, GetMenu, GetContact], [], preview)
  console.log(test)
  return { props: {...data}, revalidate:10 }
}