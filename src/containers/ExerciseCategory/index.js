import React, { Component } from 'react'
import { Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import { ServiceExerciseCategories } from '../../services/exerciseCategories/exerciseCategories'

class ExerciseCategoryPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      category: {},
      error: {}
    }
  }

  componentDidMount() {
    ServiceExerciseCategories.getExerciseCategory(this.props.match.params.id)
      .then(data => {
        this.setState({
          category: data.data
        })
      })
      .catch((error) => {
        this.setState({
          error: error.response.data
        })
      })
  }

  remove(id) {
    ServiceExerciseCategories.removeExerciseCategory(id)
      .then(() => {
        this.props.history.push('/admin/exerciseCategories')
      })
      .catch((error) => {
        this.setState({
          error: error.response.data
        })
      })
  }

  render() {
    return (
      <>
        <div>ExerciseCategory Page</div>

        { this.state.error && this.state.error.status === 'error' ? (
          <Alert color="danger">
            <span><strong>Code: </strong>{ this.state.error.err.code } | </span>
            <span><strong>Detail: </strong>{ this.state.error.err.detail } | </span>
            <span><strong>Table: </strong>{ this.state.error.err.table } | </span>
            <span><strong>Constraint: </strong>{ this.state.error.err.constraint } | </span>
          </Alert>
        ) : null }

        { this.state.category.id ? (
          <div>
            <p>{this.state.category.name}</p>

            <button onClick={() => this.remove(this.state.category.id)}>Remove</button>
          </div>
        ) : (
          <div>No exercise category</div>
        ) }
        
        <Link to="/admin/exerciseCategories">Back</Link>
      </>
    )
  }
}

export default ExerciseCategoryPage