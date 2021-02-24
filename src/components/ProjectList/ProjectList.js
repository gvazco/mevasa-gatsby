import React from "react"
import { Grid, Card, Icon, Image } from "semantic-ui-react"
import { Link } from "gatsby"
import moment from "moment"
import "moment/locale/es"
import { map } from "lodash"
import "./ProjectList.scss"

export default function ProjectList(props) {
  const { proyectos } = props
  console.log(proyectos)

  return (
    <Grid className="proyectos-list">
      {map(proyectos, proyecto => (
        <Grid.Column key={proyecto.id} mobile={16} tablet={16} computer={5}>
          <Link to={`/portafolio/${proyecto.url}`}>
            <Card className="proyectos-list__item">
              <Image src={proyecto.image.publicURL} />
              <Card.Content>
                <Card.Header>{proyecto.title}</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <Card.Meta>
                  <Icon name="map marker alternate" />
                  {proyecto.place}
                </Card.Meta>
                <Card.Meta>
                  <Icon name="calendar alternate outline" />
                  {moment(proyecto.fecha).format("LL")}
                </Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>
      ))}
    </Grid>
  )
}
