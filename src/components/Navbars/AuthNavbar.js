import React from 'react'
import { Link } from 'react-router-dom'
import {
  NavbarBrand,
  Navbar,
  Container
} from 'reactstrap'

class AdminNavbar extends React.Component {
  render() {
    return (
      <Navbar
        className="navbar-top navbar-horizontal"
      >
        <Container className="px-4">
          <NavbarBrand to="/" tag={Link}>
            <img alt="..." src={require("../../assets/img/brand/repnote-white.png")} />
          </NavbarBrand>
        </Container>
      </Navbar>
    )
  }
}

export default AdminNavbar
