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
      allStrapiPost(sort: { fields: fecha, order: DESC }) {
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
      allStrapiProyecto(sort: { fields: fecha, order: DESC }) {
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

  const productos = await graphql(`
    query {
      allStrapiProducto {
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
  `)

  console.log(portafolios.data.allStrapiProyecto.nodes)
  console.log(productos.data.allStrapiProducto.nodes)

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
    itemsPerPage: 9, // How many items you want per page
    pathPrefix: "/portafolio", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/portafolio.js`), // Just like `createPage()`
  })

  paginate({
    createPage, // The Gatsby `createPage` function
    items: productos.data.allStrapiProducto.nodes, // An array of objects
    itemsPerPage: 9, // How many items you want per page
    pathPrefix: "/productos", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/productos.js`), // Just like `createPage()`
  })

  /* -------------------------------------------------------------------------- */
  /*                        Crear ruta de pagina interna                             */
  /* -------------------------------------------------------------------------- */

  posts.data.allStrapiPost.nodes.forEach(post => {
    createPage({
      path: `/blog/${post.url}`,
      component: path.resolve(`src/templates/post/post.js`),
      context: {
        data: post,
      },
    })
  })

  portafolios.data.allStrapiProyecto.nodes.forEach(portafolio => {
    createPage({
      path: `/portafolio/${portafolio.url}`,
      component: path.resolve(`src/templates/proyecto/proyecto.js`),
      context: {
        data: portafolio,
      },
    })
  })

  productos.data.allStrapiProducto.nodes.forEach(producto => {
    createPage({
      path: `/productos/${producto.url}`,
      component: path.resolve(`src/templates/producto/producto.js`),
      context: {
        data: producto,
      },
    })
  })
}
