import React from "react"
import {
  Container,
  Form,
  Input,
  Dropdown,
  TextArea,
  Button,
} from "semantic-ui-react"
import BlogLayout from "../layouts/BlogLayout"
// import WhatsAppForm from "../components/WhatsAppForm"
import Seo from "../components/seo"
import imageBlog from "../images/web-programacion.jpg"
import "./contacto.scss"

const options = [
  {
    key: 1,
    text: "Instalacion de Materiales",
    value: "Instalacion de Materiales",
  },
  {
    key: 2,
    text: "Adquisición de Materiales",
    value: "Adquisición de Materiales",
  },
  {
    key: 3,
    text: "Oferta de productos o servicios",
    value: "Oferta de productos o servicios",
  },
  { key: 3, text: "Dudas y Sugerencias", value: "Dudas y Sugerencias" },
]

export default function Contact() {
  return (
    <BlogLayout className="contacto">
      <Seo
        title="Blog de Techos y Mantenimientos | Mevasa"
        description="Blog de Techos y Mantenimientos | Mevasa"
        image={imageBlog}
      />
      <Container fluid className="markdown-body">
        <div className="section-heading">
          <h1>Contacto</h1>
          <h6>Trabajemos juntos ¡Estamos a tus ordenes!</h6>
        </div>

        <a
          style={{ display: "none" }}
          href="https://api.whatsapp.com/send?phone=5215581853675&text=hola%20gustavo"
          target="_blank"
        >
          Envia un mensaje via WhatsApp
        </a>

        <Form id="formulariowtsp" className="formulariowtsp">
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Ingresa tu nombre..."
            required
          />
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu correo electrónico..."
            required
          />
          <Dropdown
            placeholder="State"
            search
            selection
            options={options}
          ></Dropdown>
          <TextArea placeholder="Tell us more" style={{ minHeight: 100 }} />
          <Button type="submit" id="sendbttn" className="btnwtsp">
            Envíar
          </Button>
        </Form>
      </Container>
    </BlogLayout>
  )
}
