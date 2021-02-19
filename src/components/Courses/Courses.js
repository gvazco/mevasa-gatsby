import React from "react"
import { Image, Button, Icon } from "semantic-ui-react"
import { map } from "lodash"
import dataCourses from "./data"
import "./Courses.scss"

export default function Courses() {
  console.log(dataCourses)
  return (
    <div className="courses">
      <Button.Group attached="top">
        <Button animated="vertical">
          <Button.Content hidden>Portafolio</Button.Content>
          <Button.Content visible>
            <Icon name="handshake" />
          </Button.Content>
        </Button>
        <Button animated="vertical">
          <Button.Content hidden>Productos</Button.Content>
          <Button.Content visible>
            <Icon name="shop" />
          </Button.Content>
        </Button>
      </Button.Group>

      {map(dataCourses, (course, index) => (
        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="courses__item"
        >
          <Image src={course.image} alt={course.title} />
        </a>
      ))}
      <Button.Group attached="bottom">
        <Button animated="vertical">
          <Button.Content hidden>Blog</Button.Content>
          <Button.Content visible>
            <Icon name="file alternate" />
          </Button.Content>
        </Button>

        <Button animated="vertical">
          <Button.Content hidden>Contacto</Button.Content>
          <Button.Content visible>
            <Icon name="chat" />
          </Button.Content>
        </Button>
      </Button.Group>
    </div>
  )
}
