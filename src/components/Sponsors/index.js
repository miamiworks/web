import React from "react"
import { useStaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"
import "./style.scss"
//filter: { relativePath: { regex: "/logos\/[a-zA-Z_]+.png/" }
const Sponsors = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {relativePath: {regex: "/logos\/[0-9a-zA-Z_-]+.png/"}}){
                nodes{
                    name
                    childImageSharp{
                        fixed(height: 35) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    `)

    return (
        <div className="sponsors container">
            {
                data.allFile.nodes.map((file,i) => {
                    {console.log(file.childImageSharp)}
                    //return <img className={file.name} key={i} src={file.childImageSharp.fixed.src} />
                    return <Img key={i}
                        fixed={file.childImageSharp.fixed}
                        objectFit="scale-down"
                        objectPosition="50% 50%"
                        alt=""
                    />
                })
            }
        </div>
    )
}

export default Sponsors