import React from 'react'
import { NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap'

class Login extends React.Component {
  render() {
    return (
      <>
        <footer className="py-3">
          <Container>
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
          </Container>
        </footer>
      </>
    )
  }
}

export default Login
