import React from "react"
import { Link } from "gatsby"
// import { Image, Button, Icon } from "semantic-ui-react"
import SocialMedia from "../SocialMedia"
import Courses from "../Courses"
import "./Menu.scss"

export default function Menu() {
  return (
    <div className="menu">
      <Link to="/">
        <h2>Blog Developer</h2>
      </Link>
      <p>In quis excepteur proident cillum consequat irure quis qui magna.</p>
      <SocialMedia />
      <Courses />
    </div>
  )
}
