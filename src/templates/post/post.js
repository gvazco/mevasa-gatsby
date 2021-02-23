import React from "react"
import BlogLayout from "../../layouts/BlogLayout"
import TransformOembedToIframe from "../../utils/TransformOembedToIframe"
import "./post.scss"
import Seo from "../../components/seo"

export default function post(props) {
  const { pageContext } = props
  const { data: post } = pageContext

  return (
    <BlogLayout className="post">
      <Seo
        title={post.seo_title}
        description={post.seo_description}
        image={post.miniature.publicURL}
      />

      <div className="markdown-body">
        <h1>{post.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: TransformOembedToIframe(post.content),
          }}
        />
      </div>
    </BlogLayout>
  )
}
