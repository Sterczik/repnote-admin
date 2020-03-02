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

const EditTrainingCategoryForm = (props) => {
  return (
    <Formik
      initialValues={{ id: props.trainingCategory.id, category: props.trainingCategory.name }}
      validationSchema={validationSchema}
      validateOnBlur={true}
      onSubmit={(values, actions) => {
        props.editTrainingCategory(values.id, { name: values.category })
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

export default EditTrainingCategoryForm