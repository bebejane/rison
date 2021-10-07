import { apiQuery } from "/lib/api";
import { GetMenu, GetContact } from "/graphql";
import { SEOQuery } from "/graphql";

export default function withGlobalProps(opt = {}, getStaticProps){
  
  return async (context) => {
    const queries = [GetMenu, GetContact];

    if(opt.queries)
      queries.push.apply(queries, opt.queries)
    if(opt.query)
      queries.push(opt.query)
    if(opt.model)
      queries.push(SEOQuery(opt.model))

    const props = await apiQuery(queries, {}, context.preview);

    if(getStaticProps)
      return await getStaticProps({...context, props});
    else
      return { props, revalidate: parseInt(process.env.REVALIDATE_TIME)};
  }
}
