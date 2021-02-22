/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
// import { paginate } from "gatsby-awesome-pagination"

const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  /* -------------------------------------------------------------------------- */
  /*                      Extraemos los datos desde Grapql                      */
  /* -------------------------------------------------------------------------- */

  const posts = await graphql(`
    query {
      allStrapiPost(sort: { fields: createdAt, order: DESC }) {
        nodes {
          id
          title
          fecha
          url
          content
          createdAt
          miniature {
            publicURL
          }
          seo_title
          seo_description
        }
      }
    }
  `)

  const portafolios = await graphql(`
    query {
      allStrapiProyecto(sort: { fields: createdAt, order: DESC }) {
        nodes {
          id
          title
          fecha
          seo_title
          seo_description
          content
          place
          link
          published_at
          url
          image {
            publicURL
          }
        }
      }
    }
  `)

  const products = await graphql(`
    query {
      allStrapiProducto {
        nodes {
          id
          description
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
  `)

  console.log(portafolios.data.allStrapiProyecto.nodes)
  console.log(products.data.allStrapiProducto.nodes)

  /* -------------------------------------------------------------------------- */
  /*                          Crear paginación dinámica                         */
  /* -------------------------------------------------------------------------- */

  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts.data.allStrapiPost.nodes, // An array of objects
    itemsPerPage: 9, // How many items you want per page
    pathPrefix: "/blog", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/blog.js`), // Just like `createPage()`
  })

  paginate({
    createPage, // The Gatsby `createPage` function
    items: portafolios.data.allStrapiProyecto.nodes, // An array of objects
    itemsPerPage: 3, // How many items you want per page
    pathPrefix: "/portafolio", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/portafolio.js`), // Just like `createPage()`
  })

  paginate({
    createPage, // The Gatsby `createPage` function
    items: products.data.allStrapiProducto.nodes, // An array of objects
    itemsPerPage: 3, // How many items you want per page
    pathPrefix: "/productos", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/productos.js`), // Just like `createPage()`
  })

  /* -------------------------------------------------------------------------- */
  /*                        Crear ruta de pagina interna                             */
  /* -------------------------------------------------------------------------- */

  posts.data.allStrapiPost.nodes.forEach(post => {
    createPage({
      path: `/${post.url}`,
      component: path.resolve(`src/templates/post/post.js`),
      context: {
        data: post,
      },
    })
  })

  portafolios.data.allStrapiProyecto.nodes.forEach(portafolio => {
    createPage({
      path: `/${portafolio.url}`,
      component: path.resolve(`src/templates/proyecto/proyecto.js`),
      context: {
        data: portafolio,
      },
    })
  })
}
