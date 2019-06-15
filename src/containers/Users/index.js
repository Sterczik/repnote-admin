import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
      <React.Fragment>
        <div>UsersPage</div>
        
        { this.state.users.length === 0 ? (
          <div>No users</div>
        ) : (
          this.state.users.map((user, index) => (
            <div key={index}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <Link to={'/admin/users/' + user.id}>Go</Link>
              <hr />
            </div>
          ))
        )}
      </React.Fragment>
    )
  }
}

export default UsersPage