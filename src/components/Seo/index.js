/**
 *  SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
// import { TypographyStyle, GoogleFont } from "react-typography"
// import typography from "../utils/typography"

import logo from "../../images/logo-white.png"
// import screenshot from "../assets/images/alkemy-website-screenshot.png"
// import msTileImg from "../assets/images/favicons/ms-icon-144x144.png"

// import appleIcon57 from "../assets/images/favicons/apple-icon-57x57.png"
// import appleIcon60 from "../assets/images/favicons/apple-icon-60x60.png"
// import appleIcon72 from "../assets/images/favicons/apple-icon-72x72.png"
// import appleIcon76 from "../assets/images/favicons/apple-icon-76x76.png"
// import appleIcon114 from "../assets/images/favicons/apple-icon-114x114.png"
// import appleIcon120 from "../assets/images/favicons/apple-icon-120x120.png"
// import appleIcon144 from "../assets/images/favicons/apple-icon-144x144.png"
// import appleIcon152 from "../assets/images/favicons/apple-icon-152x152.png"
// import appleIcon180 from "../assets/images/favicons/apple-icon-180x180.png"

// import androidIcon192 from "../assets/images/favicons/android-icon-192x192.png"

// import favicon16 from "../assets/images/favicons/favicon-16x16.png"
// import favicon32 from "../assets/images/favicons/favicon-32x32.png"
// import favicon96 from "../assets/images/favicons/favicon-96x96.png"

const windowGlobal = typeof window !== "undefined" ? window : null

function SEO({
  description,
  lang,
  meta,
  author,
  title,
  keywords,
  children,
  date,
  coverImage,
  coverDescription,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
            keywords
          }
        }
      }
    `
  )

//   const ogImage = coverImage ? coverImage : screenshot
//   const ogImageText = coverDescription
//     ? coverDescription
//     : "Screenshot of the MiamiTech Works Website."
  const metaDescription = description
    ? description
    : site.siteMetadata.description
  const pageAuthor = author ? author : site.siteMetadata.author
  const pageKeywords = keywords ? keywords : site.siteMetadata.keywords
  const articleDate = date ? date : null
  const siteAddress = site.siteMetadata.siteUrl

  const facebookURL = "https://www.facebook.com/";
  const twitterURL = "https://www.twitter.com/"
  const linkedinURL = "https://www.linkedin.com/"

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        { name: "charset", content: "UTF-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
        { httpEquiv: "X-UA-Compatible", content: "IE=edge,chrome=1" },
      ].concat(meta)}
    >
      <html lang={lang ? lang : "en"} />
      <meta name="msvalidate.01" content="304B53089DF131D38A8031F5232E9FB1" />

      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content={pageAuthor} />

      <meta name="apple-mobile-web-app-title" content="MiamiTechWorks" />

      {/* <meta property="og:image" content={siteUrl + ogImage} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={pageAuthor} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={siteUrl + ogImage}></meta>
      <meta name="twitter:image:alt" content={ogImageText} /> */}

      <link
        rel="canonical"
        href={
          windowGlobal && windowGlobal.location
            ? windowGlobal.location.href
            : ""
        }
      />
      {/* <meta name="msapplication-TileImage" content={msTileImg} /> */}
      <meta name="msapplication-TileColor" content="#ffffff" />

      {/* App Icons and Favicon */}
      {/* <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57} />
      <link rel="apple-touch-icon" sizes="60x60" href={appleIcon60} />
      <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72} />
      <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76} />
      <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114} />
      <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120} />
      <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144} />
      <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180} />
      <link rel="icon" type="image/png" sizes="192x192" href={androidIcon192} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="96x96" href={favicon96} />
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} /> */}

      <script defer type="application/ld+json">
        {`{
        "@context":"https://schema.org",
        "@type":"WebSite",
        "url":"${siteAddress}",
        "name":"MiamiTech Works",
        }`}
      </script>
      <script defer type="application/ld+json">
        {`{
            "@context":"https://schema.org",
            "@type":"Organization",
            "url":"${siteAddress}",
            "name":"MiamiTech Works",
            "logo": "${siteAddress}${logo}",
            "sameAs":[
              ${facebookURL},
              ${twitterURL},
              ${linkedinURL}
            ]
          }`}
      </script>
      <script defer type="application/ld+json">{`
          {
            "@context": "https://schema.org/", 
            "@type": "BreadcrumbList", 
            "itemListElement": [{
              "@type": "ListItem", 
              "position": 1, 
              "name": "Home",
              "item": "${siteAddress}"  
            }]
          }
          `}</script>
      {author !== null ? (
        <script defer type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${title}",
              "author": {
                "@type": "Person",
                "name": "${author}"
              },
              "datePublished": "${articleDate}"
            }
            `}</script>
      ) : null}
      {children}
    </Helmet>
  )
}

SEO.defaultProps = {
  meta: [],
  keywords: ``, // Comma separated string of keywords
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  children: PropTypes.object,
  coverImage: PropTypes.string,
  coverDescription: PropTypes.string,
}

export default SEO;
