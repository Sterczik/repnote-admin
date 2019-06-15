import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ServiceTrainingCategories } from '../../services/trainingCategories/trainingCategories'

class TrainingCategoriesPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      categories: [],
      category: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    ServiceTrainingCategories.getTrainingCategories()
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
    ServiceTrainingCategories.addTrainingCategory({ name: category })
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
        <div>TrainingCategoriesPage</div>
        
        { this.state.categories.length === 0 ? (
          <div>No Training Categories</div>
        ) : (
          this.state.categories.map((category, index) => (
            <div key={index}>
              <p>{category.name}</p>
              <Link to={'/admin/trainingCategories/' + category.id}>Go</Link>
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

export default TrainingCategoriesPage