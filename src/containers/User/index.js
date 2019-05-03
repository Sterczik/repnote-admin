import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ServiceUsers } from '../../services/users/users'

class UserPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    ServiceUsers.getUser(this.props.match.params.id)
      .then(data => {
        this.setState({
          user: data.data
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        <div>UserPage</div>

        { this.state.user.id ? (
          <div>
            <p>{this.state.user.id}</p>
            <p>{this.state.user.name}</p>
            <p>{this.state.user.username}</p>
            <p>{this.state.user.email}</p>
            <p>{this.state.user.avatar}</p>
            <p>{this.state.user.provider}</p>
          </div>
        ) : (
          <div>No user</div>
        ) }
        
        <Link to="/users">Back</Link>
      </React.Fragment>
    )
  }
}

export default UserPage