import Content from "/components/common/Content";
import { pageController } from "/controllers";

export default function OurOffer({page, contact, menu}) {
  return (
    <Content page={page} contact={contact} menu={menu}>
      {page.title}
    </Content>
  )
}

export async function getStaticProps({params, preview}) {
  const data = await pageController.get('our-offer', preview);
  return { props: {...data}, revalidate:10 }
}