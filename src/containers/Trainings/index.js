import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Button
} from 'reactstrap'
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
      <div className="px-4 py-3">
        <h4 className="display-4 mb-4">RepNote Trainings</h4>
        { this.state.trainings.length === 0 ? (
          <p>No trainings</p>
        ) : (
          this.state.trainings.map((training, index) => (
            <div key={index} className="border-bottom pb-3 mb-3">
              <Row>
                <Col sm="12" lg="4">
                  <span>Name: {training.name}</span>
                </Col>
                <Col sm="12" lg="4">
                  <span>Username: {training.user.name}</span>
                </Col>
                <Col sm="12" lg="4">
                  <Button
                    color="primary"
                    to={'/admin/trainings/' + training.id}
                    tag={Link}
                    size="sm"
                  >
                    Details
                  </Button>
                </Col>
              </Row>
            </div>
          ))
        )}
      </div>
    )
  }
}

export default TrainingsPage