import Content from "../../components/common/Content";
import { contactController, pageController, menuController } from "../../controllers";

export default function OurOffer({page, contact, menu}) {
  return (
    <>
      <Content page={page} contact={contact} menu={menu}>
        {page.title}
      </Content>
    </>
  )
}

export async function getStaticProps({params, preview}) {
  
  const page = await pageController.get('our-offer', preview);
  const contact = await contactController.get();
  const menu = await menuController.all();

  return { 
    props: {
      page,
      contact,
      menu
    },
    revalidate:10
  }
}