import React, { Component } from 'react'
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
              <p>{user.id}</p>
              <p>{user.name}</p>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.avatar}</p>
              <p>{user.provider}</p>
              <hr />
            </div>
          ))
        )}
      </React.Fragment>
    )
  }
}

export default UsersPage