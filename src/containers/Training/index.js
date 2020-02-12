import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
      <>
        <div>Training Page</div>

        <CustomAlert
          error={this.state.error}
        />
        
        { this.state.training.id ? (
          <div>
            <p>{this.state.training.id}</p>
            <p>{this.state.training.category.name}</p>
            <p>{this.state.training.name}</p>
            <p>{this.state.training.user.name}</p>
            <p>{this.state.training.private}</p>

            <button onClick={() => this.remove(this.state.training.id)}>Remove</button>
          </div>
        ) : (
          <div>No training</div>
        ) }

        <Link to="/admin/trainings">Back</Link>
      </>
    )
  }
}

export default TrainingPage