import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ServiceExerciseCategories } from '../../services/exerciseCategories/exerciseCategories'

class ExerciseCategoriesPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      categories: [],
      category: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    ServiceExerciseCategories.getExerciseCategories()
      .then(data => {
        this.setState({
          categories: data.data
        })
      })
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  add(category) {
    ServiceExerciseCategories.addExerciseCategory({ name: category })
      .then(data => {
        this.setState(prevState => ({
          categories: [...prevState.categories, data.data],
          category: ''
        }))
      })
  }

  render() {
    return (
      <React.Fragment>
        <div>ExerciseCategoriesPage</div>
        
        { this.state.categories.length === 0 ? (
          <div>No Exercise Categories</div>
        ) : (
          this.state.categories.map((category, index) => (
            <div key={index}>
              <p>{category.name}</p>
              <Link to={'/admin/exerciseCategories/' + category.id}>Go</Link>
              <hr />
            </div>
          ))
        )}

        <input
          type="text"
          name="category"
          value={this.state.category}
          onChange={this.handleChange}
        />
        <button onClick={() => this.add(this.state.category)}>Add</button>
      </React.Fragment>
    )
  }
}

export default ExerciseCategoriesPage