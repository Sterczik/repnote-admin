import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Button
} from 'reactstrap'

import EditTrainingCategoryForm from 'components/Forms/EditTrainingCategoryForm/EditTrainingCategoryForm'

import {
  getTrainingCategory,
  editTrainingCategory,
  removeTrainingCategory
} from 'store/global/actions'

import CustomAlert from 'components/Alert/CustomAlert'

class TrainingCategoryPage extends Component {
  componentDidMount() {
    this.props.getTrainingCategory(this.props.match.params.id)
  }

  remove(id) {
    this.props.removeTrainingCategory(id)
  }

  render() {
    return (
      <div className="px-4 py-3">
        <CustomAlert
          error={this.props.error}
        />
        { this.props.trainingCategory.id ? (
          <>
            <h4 className="display-4 mb-4">{ this.props.trainingCategory.name }</h4>
            <EditTrainingCategoryForm
              trainingCategory={this.props.trainingCategory}
              editTrainingCategory={this.props.editTrainingCategory}
            />
            <Button
              color="danger"
              onClick={() => this.remove(this.props.trainingCategory.id)}
              size="sm"
            >
              Remove
            </Button>
          </>
        ) : (
          <div>No training category</div>
        ) }
        <Button
          color="info"
          to="/admin/trainingCategories"
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
  trainingCategory: state.global.trainingCategory,
  error: state.global.error
})

const mapDispatchToProps = (dispatch) => ({
  getTrainingCategory: (id) => dispatch(getTrainingCategory(id)),
  editTrainingCategory: (id, data) => dispatch(editTrainingCategory(id, data)),
  removeTrainingCategory: (id) => dispatch(removeTrainingCategory(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrainingCategoryPage)