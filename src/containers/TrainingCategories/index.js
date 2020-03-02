import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Row,
  Col,
  Button
} from 'reactstrap'

import TrainingCategoryForm from '../../components/Forms/TrainingCategoryForm/TrainingCategoryForm'
import {
  getTrainingCategories
} from '../../app/global/actions'

class TrainingCategoriesPage extends Component {
  componentDidMount() {
    this.props.getTrainingCategories()
  }

  render() {
    return (
      <div className="px-4 py-3">
        <h4 className="display-4 mb-4">RepNote Training Categories</h4>
        { this.props.trainingCategories.length === 0 ? (
          <p>No training categories</p>
        ) : (
          this.props.trainingCategories.map((category, index) => (
            <div key={index} className="border-bottom pb-3 mb-3">
              <Row>
                <Col sm="12" lg="6">
                  <span>Name: {category.name}</span>
                </Col>
                <Col sm="12" lg="6">
                  <Button
                    color="primary"
                    to={'/admin/trainingCategories/' + category.id}
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
        <TrainingCategoryForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  trainingCategories: state.global.trainingCategories
})

const mapDispatchToProps = (dispatch) => ({
  getTrainingCategories: () => dispatch(getTrainingCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(TrainingCategoriesPage)