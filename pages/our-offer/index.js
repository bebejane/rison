import Head from "next/head";
import Content from "../../components/common/Content";
import { contactController, pageController, menuController } from "../../controller";

export default function OurOffer({page, contact, menu}) {
  return (
    <>
      <Content page={page} contact={contact} menu={menu}>
        Our Offer
      </Content>
    </>
  )
}

export async function getStaticProps(context) {
  const page = await pageController.get('our-offer');
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