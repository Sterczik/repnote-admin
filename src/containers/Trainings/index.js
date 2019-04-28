import React, { Component } from 'react'
import { ServiceTrainings } from '../../services/trainings/trainings'

class TrainingsPage extends Component {
  state = {
    trainings: []
  }

  componentDidMount() {
    ServiceTrainings.getTrainings()
      .then(data => console.log(data.data))
  }

  render() {
    return (
      <div>TrainingsPage</div>
    )
  }
}

export default TrainingsPage