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
  addTrainingCategory
} from '../../../app/global/actions'

const TrainingCategoryForm = ({
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

const TrainingCategoryFormFormik = withFormik({
  mapPropsToValues() {
    return {
      category: ''
    }
  },
  validationSchema,
  handleSubmit(values, { props }) {
    props.addTrainingCategory(values.category)
  }
})(TrainingCategoryForm)

const mapDispatchToProps = (dispatch) => ({
  addTrainingCategory: (name) => dispatch(addTrainingCategory(name))
})

export default connect(undefined, mapDispatchToProps)(TrainingCategoryFormFormik)