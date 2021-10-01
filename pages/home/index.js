import Home from '../'
import { GetHome, GetMenu, GetContact } from "/graphql";
import { apiQuery } from "/lib/api";

export default Home

export async function getStaticProps({preview}) {
  const data = await apiQuery([GetHome, GetMenu, GetContact], [], preview)
  return { props: {...data}, revalidate:10 }
}