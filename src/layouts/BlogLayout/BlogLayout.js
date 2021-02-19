import React from "react"
import { Container, Grid } from "semantic-ui-react"
import Menu from "../../components/Menu"
import "./BlogLayout.scss"

export default function BlogLayout(props) {
  const { children, className } = props
  return (
    <Container fluid className={`blog-layout ${className || ""} `}>
      <Grid>
        <Grid.Column mobile={16} tablet={16} computer={4}>
          <Menu />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={12}>
          {children}
        </Grid.Column>
      </Grid>
    </Container>
  )
}
