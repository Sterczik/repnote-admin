import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Button
} from 'reactstrap'
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
      <div className="px-4 py-3">
        <CustomAlert
          error={this.state.error}
        />
        { this.state.user.id ? (
          <>
            <h4 className="display-4 mb-4">{ this.state.user.name }</h4>
            <div className="mb-3">
              <p className="mb-0"><b>ID: </b>{this.state.user.id}</p>
              <p className="mb-0"><b>Name: </b>{this.state.user.name}</p>
              <p className="mb-0"><b>Username: </b>{this.state.user.username}</p>
              <p className="mb-0"><b>Email: </b>{this.state.user.email}</p>
              <p className="mb-0"><b>Avatar: </b>{this.state.user.avatar}</p>
              <p className="mb-0"><b>Provider: </b>{this.state.user.provider}</p>
            </div>
            <Button
              color="primary"
              onClick={() => this.remove(this.state.user.id)}
              size="sm"
            >
              Remove
            </Button>
          </>
        ) : (
          <h4 className="display-4 mb-4">Loading</h4>
        ) }
        <Button
          color="info"
          to="/admin/users"
          tag={Link}
          size="sm"
        >
          Back
        </Button>
      </div>
    )
  }
}

export default UserPage