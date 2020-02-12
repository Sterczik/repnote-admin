import React, { Component } from 'react'
import { Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import { ServiceUsers } from '../../services/users/users'

class UserPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      user: {},
      error: {}
    }
  }

  componentDidMount() {
    ServiceUsers.getUser(this.props.match.params.id)
      .then(data => {
        this.setState({
          user: data.data
        })
      })
      .catch((error) => {
        this.setState({
          error: error.response.data
        })
      })
  }

  remove(id) {
    ServiceUsers.removeUser(id)
      .then(() => {
        this.props.history.push('/admin/users')
      })
      .catch((error) => {
        this.setState({
          error: error.response.data
        })
      })
  }

  render() {
    return (
      <>
        <div>User Page</div>

        { this.state.error && this.state.error.status === 'error' ? (
          <Alert color="danger">
            <span><strong>Code: </strong>{ this.state.error.err.code } | </span>
            <span><strong>Detail: </strong>{ this.state.error.err.detail } | </span>
            <span><strong>Table: </strong>{ this.state.error.err.table } | </span>
            <span><strong>Constraint: </strong>{ this.state.error.err.constraint } | </span>
          </Alert>
        ) : null }

        { this.state.user.id ? (
          <div>
            <p>ID: {this.state.user.id}</p>
            <p>Name: {this.state.user.name}</p>
            <p>Username: {this.state.user.username}</p>
            <p>Email: {this.state.user.email}</p>
            <p>Avatar: {this.state.user.avatar}</p>
            <p>Provider: {this.state.user.provider}</p>

            <button onClick={() => this.remove(this.state.user.id)}>Remove</button>
          </div>
        ) : (
          <div>No user</div>
        ) }
        
        <Link to="/admin/users">Back</Link>
      </>
    )
  }
}

export default UserPage