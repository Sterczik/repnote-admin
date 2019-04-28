import React, { Component } from 'react'
import { ServiceUsers } from '../../services/users/users'

class UsersPage extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    ServiceUsers.getUsers()
      .then(data => console.log(data.data))
  }

  render() {
    return (
      <div>UsersPage</div>
    )
  }
}

export default UsersPage