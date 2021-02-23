import React from "react"
import { graphql } from "gatsby"
import Pagination from "../components/Pagination"
import BlogLayout from "../layouts/BlogLayout"
import ProductList from "../components/ProductList"
import Seo from "../components/seo"
import imageBlog from "../images/web-programacion.jpg"

export default function Productos(props) {
  const { data, pageContext } = props
  const productos = data.allStrapiProducto.nodes

  return (
    <BlogLayout>
      <Seo
        title="Productos de Mevasa Comercializadora"
        description="Catálogo de Productos y Accesorios"
        image={imageBlog}
      />
      <ProductList productos={productos} />
      <Pagination pageContext={pageContext} />
    </BlogLayout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allStrapiProducto(
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        id
        url
        seo_title
        seo_description
        content
        image {
          publicURL
        }
        title
        link
        fecha
        published_at
      }
    }
  }
`
