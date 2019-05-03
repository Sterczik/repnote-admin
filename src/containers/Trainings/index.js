import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ServiceTrainings } from '../../services/trainings/trainings'

class TrainingsPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      trainings: []
    }
  }

  componentDidMount() {
    ServiceTrainings.getTrainings()
      .then(data => {
        this.setState({
          trainings: data.data
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        <div>TrainingsPage</div>
        
        { this.state.trainings.length === 0 ? (
          <div>No trainings</div>
        ) : (
          this.state.trainings.map((training, index) => (
            <div key={index}>
              <p>{training.name}</p>
              <p>{training.user.name}</p>
              <Link to={'/trainings/' + training.id}>Go</Link>
              <hr />
            </div>
          ))
        )}
      </React.Fragment>
    )
  }
}

export default TrainingsPage