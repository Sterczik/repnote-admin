import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media
} from 'reactstrap'
import { authActions } from 'store/auth/actions'

class AdminNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar-dark bg-gradient-info d-none d-md-flex" expand="md" id="navbar-main">
          <Container fluid>
            <Link
              className="h4 mb-0 text-white text-uppercase d-none d-md-inline-block"
              to="/"
            >
              {this.props.brandText}
            </Link>
            <Nav className="align-items-center" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="ml-2 d-none d-md-block align-items-center">
                    <span className="mb-0 text-sm font-weight-bold">
                      <span className="fa fa-user-circle" />
                    </span>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem to="/admin/change-password" tag={Link}>
                    Change password
                  </DropdownItem>
                  <DropdownItem onClick={this.props.logout}>
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(authActions.logout())
})

export default connect(undefined, mapDispatchToProps)(AdminNavbar)