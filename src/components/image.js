import React from 'react';
import {useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./image.scss"

const Image = ({setSelectedImg}) => {
    const data = useStaticQuery(graphql`
        {
            allContentfulImage {
            nodes {
                id
                slug
                title
                category
                image {
                fluid {
                    ...GatsbyContentfulFluid
                }
                }
            }
            }
        } 
    `)

    console.log(data.allContentfulImage.nodes);

    return (
        <div className="image-container">
            <div className="image-grid">
                {data.allContentfulImage.nodes.map((image, key) => (
                    <Img 
                    key={key}
                    className="image-item"
                    fluid={image.image.fluid}
                    alt={image.title}
                    onClick={() => setSelectedImg(image.image.fluid)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Image