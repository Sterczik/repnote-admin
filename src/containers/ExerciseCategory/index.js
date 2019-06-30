import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ServiceExerciseCategories } from '../../services/exerciseCategories/exerciseCategories'

class ExerciseCategoryPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      category: {}
    }
  }

  componentDidMount() {
    ServiceExerciseCategories.getExerciseCategory(this.props.match.params.id)
      .then(data => {
        this.setState({
          category: data.data
        })
      })
  }

  remove(id) {
    ServiceExerciseCategories.removeExerciseCategory(id)
      .then(() => {
        this.props.history.push('/exerciseCategories')
      })
  }

  render() {
    return (
      <>
        <div>ExerciseCategoryPage</div>

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