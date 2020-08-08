import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { TopNav } from "../TopNav"
import SEO from "../Seo"
import "../../style.scss"

const Layout = ({
    children,
    bodyClass,
    description,
    lang,
    meta,
    title,
    keywords,
    date,
    author,
    coverImage,
    coverDescription,
}) => {
    return (
      <div className={bodyClass}>
        <SEO
          description={description}
          lang={lang}
          meta={meta}
          title={title}
          keywords={keywords}
          date={date}
          author={author}
          coverImage={coverImage}
          coverDescription={coverDescription}
        />
        {bodyClass!=="home"?<TopNav />:null}
        {children}
      </div>
    )
}
export default Layout