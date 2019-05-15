import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ServiceTrainingCategories } from '../../services/trainingCategories/trainingCategories'

class UsersPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    ServiceTrainingCategories.getTrainingCategories()
      .then(data => {
        this.setState({
          categories: data.data
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        <div>TrainingCategoriesPage</div>
        
        { this.state.categories.length === 0 ? (
          <div>No Training Categories</div>
        ) : (
          this.state.categories.map((category, index) => (
            <div key={index}>
              <p>{category.name}</p>
              <Link to={'/trainingCategories/' + category.id}>Go</Link>
              <hr />
            </div>
          ))
        )}
      </React.Fragment>
    )
  }
}

export default UsersPage