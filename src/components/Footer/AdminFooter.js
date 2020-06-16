import React from 'react'
import { Row, Col, Nav, NavItem, NavLink } from 'reactstrap'

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer px-4">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              © 2020 Kamil Sterczewski
            </div>
          </Col>
          <Col xl="6">
            <Nav className="nav-footer justify-content-center justify-content-xl-end">
              <NavItem>
                <NavLink
                  href="https://github.com/Sterczik"
                  target="_blank"
                >
                  Github
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </footer>
    )
  }
}

export default Footer
