import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ServiceUsers } from '../../services/users/users'
import CustomAlert from '../../components/Alert/CustomAlert'

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

        <CustomAlert
          error={this.state.error}
        />

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