import React from 'react'
import { ErrorMessage, Formik } from 'formik'
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

const EditExerciseCategoryForm = (props) => {
  return (
    <Formik
      initialValues={{ id: props.exerciseCategory.id, category: props.exerciseCategory.name }}
      validationSchema={validationSchema}
      validateOnBlur={true}
      onSubmit={(values, actions) => {
        props.editExerciseCategory(values.id, { name: values.category })
      }}
    >
      { (formikProps) => {
        const {
          values,
          handleChange,
          handleSubmit
        } = formikProps

        return (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs="8" md="6">
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
              <Col xs="4" md="6">
                <Button
                  type="submit"
                  color="primary"
                >
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        )
      }}
    </Formik>
  )
}

export default EditExerciseCategoryForm