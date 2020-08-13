
import React,{useContext} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopNav } from "../TopNav"
import { Footer } from "../Footer"
import SEO from "../Seo"
import "../../styles/style.scss"
import {Context} from "../../store/appContext.js"
import { Button } from "react-bootstrap"

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
    const { store, actions } = useContext(Context)
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
        {bodyClass !== "home" ? (
          <TopNav
            links={
              store && [
                ...store.navMenu,
                {
                  label: "Post a Job",
                  component: ({ className }) => (
                    <Button
                      className={`${className} px-3 my-auto`}
                      variant="outline-warning"
                    >
                      Post a Job
                    </Button>
                  ),
                },
              ]
            }
          />
        ) : null}
        {children}
        <Footer />
      </div>
    )
}
export default Layout