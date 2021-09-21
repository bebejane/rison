import Page from '/components/pages/page'
import {pageController, menuController} from '/controllers';
import fs from 'fs'

export default Page;

export async function getStaticProps({params, preview}) {
  const slug = params.slug[0]
  const data = await pageController.get(slug, preview)
  return { props: {...data}, revalidate:10 }
}
export async function getStaticPaths() {
  
  const menu = await menuController.all()
  const dirs = fs.readdirSync(`${process.cwd()}/pages`, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name)
  const paths = menu.filter(m => !dirs.includes(m.slug) && m.slug !== 'home').map((m)=>{ return {params:{slug:[m.slug]}}})
  return {
    paths,
    fallback: 'blocking'
  };
}

