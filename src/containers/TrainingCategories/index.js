import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Button
} from 'reactstrap'
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
      <div className="px-4 py-3">
        <h4 className="display-4 mb-4">RepNote Training Categories</h4>
        { this.state.categories.length === 0 ? (
          <p>No training categories</p>
        ) : (
          this.state.categories.map((category, index) => (
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
        <input
          type="text"
          name="category"
          value={this.state.category}
          onChange={this.handleChange}
        />
        <Button
          color="primary"
          onClick={() => this.add(this.state.category)}
          size="sm"
        >
          Add
        </Button>
      </div>
    )
  }
}

export default TrainingCategoriesPage