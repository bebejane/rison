export default function NavBar({menu}) {  
  return (
    <div>
    {menu.map((m)=>
      <div>{m.title}</div>
    )}    
    </div>
  )
}
export async function getStaticProps(context) {
  const menu = await menuController.get();
  return { 
    props: {
      menu
    }
  }
}