import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ServiceTrainingCategories } from '../../services/trainingCategories/trainingCategories'

class TrainingCategoryPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      category: {}
    }
  }

  componentDidMount() {
    ServiceTrainingCategories.getTrainingCategory(this.props.match.params.id)
      .then(data => {
        this.setState({
          category: data.data
        })
      })
  }

  remove(id) {
    ServiceTrainingCategories.removeTrainingCategory(id)
      .then(() => {
        this.props.history.push('/trainingCategories')
      })
  }

  render() {
    return (
      <>
        <div>TrainingCategoryPage</div>

        { this.state.category.id ? (
          <div>
            <p>{this.state.category.name}</p>

            <button onClick={() => this.remove(this.state.category.id)}>Remove</button>
          </div>
        ) : (
          <div>No training category</div>
        ) }
        
        <Link to="/admin/trainingCategories">Back</Link>
      </>
    )
  }
}

export default TrainingCategoryPage