import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect} from "react"
import { TopNav } from "../TopNav"
import { Footer } from "../Footer"
import SEO from "../Seo"
import "../../style.scss"
import { FirebaseAuth, FirebaseDB } from "../Firebase/FirebaseApp"


FirebaseAuth
  .signInAnonymously()
  .catch(function (error) {
    var errorCode = error.code
    var errorMessage = error.message
    console.error(`Error: ${errorCode}. ${errorMessage}`)
  })

  
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
    useEffect(()=>{
  
      FirebaseDB.collection("events")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(`${doc.id} => ${doc.data()}`)
          })
        })
      
      
    },[]);
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
        <Footer />
      </div>
    )
}
export default Layout