import React from "react"
import { Link } from "gatsby"
import { Image } from "semantic-ui-react"
import { Navbar, Nav } from "react-bootstrap"
// import SocialMedia from "../SocialMedia"
// import Courses from "../Courses"
import "./Menu.scss"
import logo from "../../images/MevasaTechosLogo.png"

export default function Menu() {
  return (
    <div className="menu">
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="transparent"
        variant="light"
      >
        <Link to="/">
          <Image src={logo} />
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            {/* <Link to="/" activeClassName="active">
              Inicio
            </Link> */}

            <Link to="/blog" partiallyActive activeClassName="active">
              Blog
            </Link>

            <Link to="/portafolio" partiallyActive activeClassName="active">
              Portafolio
            </Link>

            <Link to="/productos" partiallyActive activeClassName="active">
              Productos
            </Link>

            <Link to="/contacto" activeClassName="active">
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
