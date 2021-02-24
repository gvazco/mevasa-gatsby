import React from "react"
import { Container } from "semantic-ui-react"
import BlogLayout from "../layouts/BlogLayout"
import WhatsAppForm from "../components/WhatsAppForm"
import "./contacto.scss"

export default function Contact() {
  return (
    <BlogLayout className="contacto">
      <Container fluid className="markdown-body">
        <WhatsAppForm />
      </Container>
    </BlogLayout>
  )
}
