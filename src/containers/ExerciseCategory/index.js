import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Button
} from 'reactstrap'

import {
  getExerciseCategory,
  editExerciseCategory,
  removeExerciseCategory
} from 'store/global/actions'

import EditExerciseCategoryForm from 'components/Forms/EditExerciseCategoryForm/EditExerciseCategoryForm'
import CustomAlert from 'components/Alert/CustomAlert'

class ExerciseCategoryPage extends Component {
  componentDidMount() {
    this.props.getExerciseCategory(this.props.match.params.id)
  }

  remove(id) {
    this.props.removeExerciseCategory(id)
  }

  render() {
    return (
      <div className="px-4 py-3">
        <CustomAlert
          error={this.props.error}
        />
        { this.props.exerciseCategory.id ? (
          <>
            <h4 className="display-4 mb-4">{ this.props.exerciseCategory.name }</h4>
            <EditExerciseCategoryForm
              exerciseCategory={this.props.exerciseCategory}
              editExerciseCategory={this.props.editExerciseCategory}
            />
            <Button
              color="danger"
              onClick={() => this.remove(this.props.exerciseCategory.id)}
              size="sm"
            >
              Remove
            </Button>
          </>
        ) : (
          <div>No exercise category</div>
        ) }
        <Button
          color="info"
          to="/admin/exerciseCategories"
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
  exerciseCategory: state.global.exerciseCategory,
  error: state.global.error
})

const mapDispatchToProps = (dispatch) => ({
  getExerciseCategory: (id) => dispatch(getExerciseCategory(id)),
  editExerciseCategory: (id, data) => dispatch(editExerciseCategory(id, data)),
  removeExerciseCategory: (id) => dispatch(removeExerciseCategory(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseCategoryPage)