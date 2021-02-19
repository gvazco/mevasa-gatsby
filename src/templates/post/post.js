import React from "react"
import BlogLayout from "../../layouts/BlogLayout"
import TransformOembedToIframe from "../../utils/TransformOembedToIframe"
import "./post.scss"
import Seo from "../../components/seo"

export default function post(props) {
  const { pageContext } = props
  const { data: post } = pageContext

  console.log(post)
  return (
    <BlogLayout className="post">
      <Seo
        title={post.seo_title}
        description={post.seo_description}
        image={post.miniature.publicURL}
      />
      <h1>{post.title}</h1>
      <div className="markdown-body">
        <div
          dangerouslySetInnerHTML={{
            __html: TransformOembedToIframe(post.content),
          }}
        />
      </div>
    </BlogLayout>
  )
}
