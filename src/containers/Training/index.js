import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Button
} from 'reactstrap'
import { ServiceTrainings } from '../../services/trainings/trainings'
import CustomAlert from '../../components/Alert/CustomAlert'

class TrainingPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      training: {},
      error: {}
    }
  }

  componentDidMount() {
    ServiceTrainings.getTraining(this.props.match.params.id)
      .then(data => {
        this.setState({
          training: data.data
        })
      })
      .catch((error) => {
        this.setState({
          error: error.response.data
        })
      })
  }

  remove(id) {
    ServiceTrainings.removeTraining(id)
      .then(() => {
        this.props.history.push('/admin/trainings')
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
        { this.state.training.id ? (
          <>
            <h4 className="display-4 mb-4">{ this.state.training.name }</h4>
            <div className="mb-3">
              <p className="mb-0"><b>ID: </b>{this.state.training.id}</p>
              <p className="mb-0"><b>Name: </b>{this.state.training.name}</p>
              <p className="mb-0"><b>Category name: </b>{this.state.training.category.name}</p>
              <p className="mb-0"><b>Username: </b>{this.state.training.user.name}</p>
              <p className="mb-0"><b>Private: </b>{String(this.state.training.private)}</p>
            </div>
            <Button
              color="primary"
              onClick={() => this.remove(this.state.training.id)}
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
          to="/admin/trainings"
          tag={Link}
          size="sm"
        >
          Back
        </Button>
      </div>
    )
  }
}

export default TrainingPage