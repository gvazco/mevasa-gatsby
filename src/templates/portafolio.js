import React from "react"
import { graphql } from "gatsby"
import Pagination from "../components/Pagination"
import BlogLayout from "../layouts/BlogLayout"
import ProjectList from "../components/ProjectList"
import Seo from "../components/seo"
import imageBlog from "../images/web-programacion.jpg"

export default function Portafolio(props) {
  const { data, pageContext } = props
  const proyectos = data.allStrapiProyecto.nodes

  return (
    <BlogLayout>
      <Seo
        title="Portafolio de Techos y Mantenimientos"
        description="Muestra de proyectos realizados durante los últimos 10 años."
        image={imageBlog}
      />
      <ProjectList proyectos={proyectos} />
      <Pagination pageContext={pageContext} />
    </BlogLayout>
  )
}
export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allStrapiProyecto(
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        id
        url
        title
        fecha
        seo_title
        seo_description
        content
        link
        published_at
        place
        image {
          publicURL
        }
      }
    }
  }
`
