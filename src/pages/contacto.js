import React from "react"
import BlogLayout from "../layouts/BlogLayout"
import "./contacto.scss"

export default function Contact() {
  return (
    <BlogLayout className="contacto">
      <div className="markdown-body">
        <h1>Hola Soy Contacto</h1>
        <div className="gatsby-iframe-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7524.695487566502!2d-99.28917052526185!3d19.44056834751911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d204091ccd34f7%3A0x4780021848091d3e!2sTechos%20y%20Mantenimientos%20Industriales%20%7C%20Mevasa%20Comercializadora!5e0!3m2!1ses!2smx!4v1614119562504!5m2!1ses!2smx"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </BlogLayout>
  )
}
