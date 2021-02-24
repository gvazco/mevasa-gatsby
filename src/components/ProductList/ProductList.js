import React from "react"
import { Grid, Card, Icon, Image } from "semantic-ui-react"
import { Link } from "gatsby"
import moment from "moment"
import "moment/locale/es"
import { map } from "lodash"
import "./ProductList.scss"

export default function ProductList(props) {
  const { productos } = props

  return (
    <Grid className="productos-list">
      {map(productos, producto => (
        <Grid.Column key={producto.id} mobile={16} tablet={16} computer={5}>
          <Link to={`/productos/${producto.url}`}>
            <Card className="productos-list__item">
              <Image src={producto.image.publicURL} />
              <Card.Content>
                <Card.Header>{producto.title}</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <Card.Meta>
                  <Icon name="certificate" />
                  {producto.seo_description}
                </Card.Meta>
                <Card.Meta>
                  <Icon name="calendar alternate outline" />
                  {moment(producto.fecha).format("LL")}
                </Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>
      ))}
    </Grid>
  )
}
