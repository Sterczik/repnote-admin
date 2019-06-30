import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ServiceTrainings } from '../../services/trainings/trainings'

class TrainingPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      training: {}
    }
  }

  componentDidMount() {
    ServiceTrainings.getTraining(this.props.match.params.id)
      .then(data => {
        this.setState({
          training: data.data
        })
      })
  }

  render() {
    return (
      <>
        <div>TrainingPage</div>
        
        { this.state.training.id ? (
          <div>
            <p>{this.state.training.id}</p>
            <p>{this.state.training.category.name}</p>
            <p>{this.state.training.name}</p>
            <p>{this.state.training.user.name}</p>
            <p>{this.state.training.private}</p>
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