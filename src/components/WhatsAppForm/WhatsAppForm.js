import React from "react"
import { Form, Input, Dropdown, TextArea, Button } from "semantic-ui-react"

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
  { key: 4, text: "Dudas y Sugerencias", value: "Dudas y Sugerencias" },
]

export default function WhatsAppForm() {
  return (
    <div>
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
          fluid
          iconPosition="left"
          icon="user"
          type="text"
          id="name"
          name="name"
          focus
          placeholder="Ingresa tu nombre..."
          required
        />
        <Input
          fluid
          iconPosition="left"
          icon="envelope"
          type="email"
          id="email"
          name="email"
          placeholder="Ingresa tu correo electrónico..."
          required
        />
        <Dropdown
          fluid
          placeholder="State"
          search
          selection
          options={options}
        ></Dropdown>
        <TextArea
          name="subject"
          id="subject"
          cols="10"
          rows="10"
          placeholder="¿Cómo podemos ayudarte?"
          style={{ minHeight: 100 }}
        />
        <Button type="submit" id="sendbttn" className="btnwtsp">
          Envíar
        </Button>
      </Form>
    </div>
  )
}
