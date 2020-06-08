import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Row,
  Col,
  Button
} from 'reactstrap'

import {
  getTrainings
} from 'store/global/actions'

class TrainingsPage extends Component {
  componentDidMount() {
    this.props.getTrainings()
  }

  render() {
    return (
      <div className="px-4 py-3">
        <h4 className="display-4 mb-4">RepNote Trainings</h4>
        { this.props.trainings.length === 0 ? (
          <p>No trainings</p>
        ) : (
          this.props.trainings.map((training, index) => (
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

const mapStateToProps = (state) => ({
  trainings: state.global.trainings
})

const mapDispatchToProps = (dispatch) => ({
  getTrainings: () => dispatch(getTrainings())
})

export default connect(mapStateToProps, mapDispatchToProps)(TrainingsPage)