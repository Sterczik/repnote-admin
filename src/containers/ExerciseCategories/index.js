import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Row,
  Col,
  Button
} from 'reactstrap'

import ExerciseCategoryForm from 'components/Forms/ExerciseCategoryForm/ExerciseCategoryForm'
import {
  getExerciseCategories
} from 'store/global/actions'

class ExerciseCategoriesPage extends Component {
  componentDidMount() {
    this.props.getExerciseCategories()
  }

  render() {
    return (
      <div className="px-4 py-3">
        <h4 className="display-4 mb-4">RepNote Exercise Categories</h4>
        { this.props.exerciseCategories.length === 0 ? (
          <p>No exercise categories</p>
        ) : (
          this.props.exerciseCategories.map((category, index) => (
            <div key={index} className="border-bottom pb-3 mb-3">
              <Row>
                <Col sm="12" lg="6">
                  <span>Name: {category.name}</span>
                </Col>
                <Col sm="12" lg="6">
                  <Button
                    color="primary"
                    to={'/admin/exerciseCategories/' + category.id}
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
        <ExerciseCategoryForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  exerciseCategories: state.global.exerciseCategories
})

const mapDispatchToProps = (dispatch) => ({
  getExerciseCategories: () => dispatch(getExerciseCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseCategoriesPage)