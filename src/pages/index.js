import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { Button } from "semantic-ui-react"

import BlogLayout from "../layouts/BlogLayout"

export default function Home() {
  return (
    <BlogLayout>
      <h1>Hola soy el Home</h1>
      <p>Hola soy un parrafo</p>
      <div>
        <Button primary>Primary</Button>
        <Button secondary>Primary</Button>
      </div>
    </BlogLayout>
  )
}
