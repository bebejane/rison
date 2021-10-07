import { apiQuery } from "/lib/api";
import { GetMenu, GetContact } from "/graphql";

export default function withGlobalProps(query, getStaticProps){
  return async (context) => {
    const queries = [GetMenu, GetContact];

    if(query)
      Array.isArray(query) ? queries.push.apply(queries, query) : queries.push(query)
    
    const props = await apiQuery(queries, {}, context.preview);

    if(getStaticProps)
      return await getStaticProps({...context, props});
    else
      return { props, revalidate: parseInt(process.env.REVALIDATE_TIME)};
  }
}
