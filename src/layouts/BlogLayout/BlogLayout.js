import React from "react"
import { Container, Grid, Icon } from "semantic-ui-react"
import Menu from "../../components/Menu"
import SocialMedia from "../../components/SocialMedia"
import "./BlogLayout.scss"

export default function BlogLayout(props) {
  const { children, className } = props
  return (
    <Container fluid className={`blog-layout ${className || ""} `}>
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={10} computer={11}>
            <div className="top_info">
              <ul>
                <li>Seguridad, Exactitud y Garantía </li>
                <li>
                  <Icon name="whatsapp" />
                  (55) 8185-3675
                </li>
                <li>
                  <Icon name="whatsapp" />
                  (55) 8280-2149
                </li>
              </ul>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={6} computer={5}>
            <SocialMedia />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Menu />
          </Grid.Column>
        </Grid.Row>

        <Grid.Column mobile={16} tablet={16} computer={16}>
          {children}
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={16}>
          <p>
            © 2020 Techos y Mantenimientos | Mevasa Comercializadora. Todos los
            derechos reservados. Sitio desarrollado por:
            <a href="#"> Disturbio Ilustrativo.</a>
          </p>
        </Grid.Column>
      </Grid>
    </Container>
  )
}
