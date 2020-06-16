import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Button
} from 'reactstrap'

import {
  getTraining,
  removeTraining
} from 'store/global/actions'
import CustomAlert from 'components/Alert/CustomAlert'

class TrainingPage extends Component {
  componentDidMount() {
    this.props.getTraining(this.props.match.params.id)
  }

  remove(id) {
    this.props.removeTraining(id)
  }

  render() {
    return (
      <div className="px-4 py-3">
        <CustomAlert
          error={this.props.error}
        />
        { this.props.training.id ? (
          <>
            <h4 className="display-4 mb-4">{ this.props.training.name }</h4>
            <div className="mb-3">
              <p className="mb-0"><b>ID: </b>{this.props.training.id}</p>
              <p className="mb-0"><b>Name: </b>{this.props.training.name}</p>
              <p className="mb-0"><b>Category name: </b>{this.props.training.category.name}</p>
              <p className="mb-0"><b>Username: </b>{this.props.training.user.name}</p>
              <p className="mb-0"><b>Private: </b>{String(this.props.training.private)}</p>
            </div>
            <div className="mb-3">
              <p className="mb-2"><b>Subtrainings</b></p>
              { this.props.training.subtrainings.map((subtraining) => (
                <div key={subtraining.id} className="border-top py-2">
                  <p className="mb-1"><b>{ subtraining.name }</b></p>
                  <ol className="pl-4">
                    { subtraining.exercises.map((exercise) => (
                      <>
                        <li className="mb-1">{ exercise.name }</li>
                        <ul className="mb-1 pl-4">
                          { exercise.rounds.map((round) => (
                            <li className="mb-1" key={round.id}>
                              <p className="mb-0">Weight: { round.weight } kg</p>
                              <p className="mb-0">Reps: { round.reps }</p>
                            </li>
                          )) }
                        </ul>
                      </>
                    )) }
                  </ol>
                </div>
              )) }
            </div>
            <Button
              color="primary"
              onClick={() => this.remove(this.props.training.id)}
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

const mapStateToProps = (state) => ({
  training: state.global.training
})

const mapDispatchToProps = (dispatch) => ({
  getTraining: (id) => dispatch(getTraining(id)),
  removeTraining: (id) => dispatch(removeTraining(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrainingPage)