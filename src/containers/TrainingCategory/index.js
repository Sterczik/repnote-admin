import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ServiceTrainingCategories } from '../../services/trainingCategories/trainingCategories'
import CustomAlert from '../../components/Alert/CustomAlert'

class TrainingCategoryPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      category: {},
      name: '',
      edit: false,
      error: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.editOn = this.editOn.bind(this)
    this.editOff = this.editOff.bind(this)
    this.edit = this.edit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  componentDidMount() {
    ServiceTrainingCategories.getTrainingCategory(this.props.match.params.id)
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
    ServiceTrainingCategories.removeTrainingCategory(id)
      .then(() => {
        this.props.history.push('/admin/trainingCategories')
      })
      .catch((error) => {
        this.setState({
          error: error.response.data
        })
      })
  }

  editOn() {
    this.setState({
      edit: true
    })
  }

  editOff() {
    this.setState({
      edit: false,
      name: ''
    })
  }

  edit() {
    ServiceTrainingCategories.editTrainingCategory(this.props.match.params.id, { name: this.state.name })
      .then((data) => {
        this.setState({
          category: data.data,
          name: '',
          edit: false
        })
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
        <div>TrainingCategory Page</div>

        <CustomAlert
          error={this.state.error}
        />

        { this.state.category.id ? (
          <div>
            { this.state.edit ? (
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            ) : (
              <p>{this.state.category.name}</p>
            ) }

            { !this.state.edit ? (
              <button onClick={this.editOn}>Edit</button>
            ) : (
              <>
                <button onClick={this.editOff}>Cancel</button>
                <button onClick={this.edit}>Save</button>
              </>
            ) }

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