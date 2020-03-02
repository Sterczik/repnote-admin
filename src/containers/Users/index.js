import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Row,
  Col,
  Button
} from 'reactstrap'

import {
  getUsers
} from '../../app/global/actions'

class UsersPage extends Component {
  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    return (
      <div className="px-4 py-3">
        <h4 className="display-4 mb-4">RepNote Users</h4>
        { this.props.users.length === 0 ? (
          <p>No users</p>
        ) : (
          this.props.users.map((user, index) => (
            <div key={index} className="border-bottom pb-3 mb-3">
              <Row>
                <Col sm="12" lg="4">
                  <span>Name: {user.name}</span>
                </Col>
                <Col sm="12" lg="4">
                  <span>Email: {user.email}</span>
                </Col>
                <Col sm="12" lg="4">
                  <Button
                    color="primary"
                    to={'/admin/users/' + user.id}
                    tag={Link}
                    size="sm"
                  >
                    Details
                  </Button>
                </Col>
              </Row>
            </div>
          ))
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.global.users
})

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)