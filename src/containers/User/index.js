import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Button
} from 'reactstrap'

import {
  getUser,
  removeUser
} from 'store/global/actions'
import CustomAlert from 'components/Alert/CustomAlert'

class UserPage extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.id)
  }

  remove(id) {
    this.props.removeUser(id)
  }

  render() {
    return (
      <div className="px-4 py-3">
        <CustomAlert
          error={this.props.error}
        />
        { this.props.user.id ? (
          <>
            <h4 className="display-4 mb-4">{ this.props.user.name }</h4>
            <div className="mb-3">
              <p className="mb-0"><b>ID: </b>{this.props.user.id}</p>
              <p className="mb-0"><b>Name: </b>{this.props.user.name}</p>
              <p className="mb-0"><b>Username: </b>{this.props.user.username}</p>
              <p className="mb-0"><b>Email: </b>{this.props.user.email}</p>
              <p className="mb-0"><b>Avatar: </b>{this.props.user.avatar}</p>
              <p className="mb-0"><b>Provider: </b>{this.props.user.provider}</p>
            </div>
            <Button
              color="primary"
              onClick={() => this.remove(this.props.user.id)}
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

const mapStateToProps = (state) => ({
  user: state.global.user,
  error: state.global.error
})

const mapDispatchToProps = (dispatch) => ({
  getUser: (id) => dispatch(getUser(id)),
  removeUser: (id) => dispatch(removeUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)