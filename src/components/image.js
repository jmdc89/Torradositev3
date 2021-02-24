import React from 'react';
import {useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./image.scss"
import Swal from 'sweetalert2'

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


    return (
        <div className="image-container">
            <div className="image-grid">
                {data.allContentfulImage.nodes.map((image, key) => (
                    <Img 
                    key={key}
                    className="image-item"
                    fluid={image.image.fluid}
                    alt={image.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default Image