import { NextSeo, DefaultSeo } from 'next-seo';

const DatoSEO = ({seo = {}, site = {}, pathname, title, description}) => {

  const meta = parseDatoMetaTags({seo,site,pathname})
  const {globalSeo, favicon} = site
  const favicons = favicon ? favicon.map(({ attributes }) => {return {...attributes} }) : [];

  title = title || meta.title;
  description = description || meta.description;

  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        url: meta["article:publisher"],
        title,
        description,
        locale:meta["og:locale"],
        type:meta["og:type"],
        site_name:meta["og:site_name"],
        images: meta["og:image"] && [{
          url: meta["og:image"],
          width: meta["og:image:width"],
          height: meta["og:image:height"],
        }]
      }}
      twitter={ globalSeo && {
        handle: globalSeo.twitterAccount,
        site: globalSeo.twitterAccount,
        cardType: globalSeo.fallbackSeo.twitterCard,
      }}
      additionalLinkTags={favicons} 
    />
  )
}

const DefaultDatoSEO = ({site, url}) => {
  const {globalSeo, favicon, globalSeo : {fallbackSeo}} = site
  const twitterSite = globalSeo.twitterAccount ? `https://twitter.com/${globalSeo.twitterAccount.replace("@", "")}` : undefied
  return (
    <DefaultSeo
      openGraph={{
        type: 'website',
        locale: globalSeo.locale,
        site_name: globalSeo.siteName,
      }}
      twitter={{
        handle: globalSeo.twitterAccount,
        site: twitterSite,
        cardType: fallbackSeo.twitterCard,
      }}
    />
  )
}




const parseDatoMetaTags = ({seo, site, pathname}) => {

	if(!seo || !site) return []
	
	const { globalSeo } = site;
	const { tags } = seo;

	let metaTags = tags || []
	let titleTag = metaTags.filter(m=> m.tag === "title")[0]
	
  if(titleTag){
    if(pathname === "/")
      titleTag.content = globalSeo.siteName
    else if(!titleTag.content.startsWith(globalSeo.siteName))
      titleTag.content = `${globalSeo.siteName} -- ${titleTag.content}`
  }
	metaTags = metaTags.map(t => { return t.tag !== 'title' ? t : titleTag})

  const meta = {}

  metaTags.forEach(t => {
    const prop = t.attributes ? t.attributes.property || t.attributes.name  : t.tag;
    const value = t.attributes ?  t.attributes.content || t.attributes : t.content;  
    meta[prop] = value
  })
  //console.log(seo)
	return meta
}
export default DatoSEO;
export {
  DefaultDatoSEO
};
