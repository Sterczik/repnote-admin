import React from 'react'
import { connect } from 'react-redux'
import { withFormik, Form as FormikForm, ErrorMessage } from 'formik'
import validationSchema from './validationSchema'

import {
  Form,
  Button,
  FormGroup,
  Input,
  InputGroup,
  Row,
  Col
} from 'reactstrap'

import {
  addExerciseCategory
} from '../../../app/global/actions'

const ExerciseCategoryForm = ({
  values,
  errors,
  touched,
  handleChange
}) => (
  <FormikForm>
    <Form role="form">
      <Row>
        <Col md="6">
          <FormGroup>
            <InputGroup className="input-group-alternative">
              <Input
                placeholder="Category name"
                type="text"
                name="category"
                value={values.category}
                onChange={handleChange}
              />
            </InputGroup>
            <div className="formik-invalid-feedback">
              <ErrorMessage name="category" />
            </div>
          </FormGroup>
        </Col>
        <Col md="6">
          <Button
            type="submit"
            color="primary"
          >
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  </FormikForm>
)

const ExerciseCategoryFormFormik = withFormik({
  mapPropsToValues() {
    return {
      category: ''
    }
  },
  validationSchema,
  handleSubmit(values, { props }) {
    props.addExerciseCategory(values.category)
  }
})(ExerciseCategoryForm)

const mapDispatchToProps = (dispatch) => ({
  addExerciseCategory: (name) => dispatch(addExerciseCategory(name))
})

export default connect(undefined, mapDispatchToProps)(ExerciseCategoryFormFormik)