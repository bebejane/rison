import { gql } from "graphql-request"

export { default as GetHome } from "./home.graphql";
export { default as GetContact } from "./contact.graphql";
export { default as GetMenu } from "./menu.graphql";
export { default as GetOurOffer } from "./ourOffer.graphql";
export { default as GetAbout } from "./about.graphql";

export const SEOQuery = (schema) =>{
  return gql`
    query GetSEO {
      site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
        globalSeo {
          facebookPageUrl
          siteName
          titleSuffix
          twitterAccount
          fallbackSeo {
            description
            title
            twitterCard
          }
        }
      }
      seo: ${schema} {
        tags: _seoMetaTags {
          attributes
          content
          tag
        }
      }
    }
  `
}

