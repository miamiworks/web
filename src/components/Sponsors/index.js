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
                        fluid{
                        ...GatsbyImageSharpFluid
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
                    {/* console.log(file.childImageSharp) */}
                    return <img className={file.name} key={i} src={file.childImageSharp.fluid.src} />
                })
            }
        </div>
    )
}

export default Sponsors