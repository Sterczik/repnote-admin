import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Button
} from 'reactstrap'
import { ServiceUsers } from '../../services/users/users'

class UsersPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    ServiceUsers.getUsers()
      .then(data => {
        this.setState({
          users: data.data.users
        })
      })
  }

  render() {
    return (
      <div className="px-4 py-3">
        <h4 className="display-4 mb-4">RepNote Users</h4>
        { this.state.users.length === 0 ? (
          <p>No users</p>
        ) : (
          this.state.users.map((user, index) => (
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

export default UsersPage