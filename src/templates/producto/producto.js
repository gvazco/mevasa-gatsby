import React from "react"
import Disqus from "gatsby-plugin-disqus"
import BlogLayout from "../../layouts/BlogLayout"
import TransformOembedToIframe from "../../utils/TransformOembedToIframe"
import "./producto.scss"
import Seo from "../../components/seo"

export default function Producto(props) {
  const { pageContext } = props
  const { data: producto } = pageContext

  return (
    <BlogLayout className="producto">
      <Seo
        title={producto.seo_title}
        description={producto.seo_description}
        image={producto.image.publicURL}
      />

      <div className="markdown-body">
        <h1>{producto.title}</h1>
        <a href={producto.link}>Cotizar ahora</a>
        <div
          dangerouslySetInnerHTML={{
            __html: TransformOembedToIframe(producto.content),
          }}
        />
        <br />
        <br />
        <Disqus
          identifier={producto.id}
          title={producto.title}
          url={`/${producto.url}`}
        />
      </div>
    </BlogLayout>
  )
}
