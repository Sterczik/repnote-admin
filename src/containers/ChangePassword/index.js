import React from 'react'
import { connect } from 'react-redux'
import { withFormik, Form as FormikForm, ErrorMessage } from 'formik'
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Alert
} from 'reactstrap'

import validationSchema from './validationSchema'
import { authActions } from 'store/auth/actions'

const ChangePasswordForm = ({
  values,
  handleChange,
  error
}) => (
  <div className="px-4 py-3">
    { error.errors && error.errors.message ? (
      <Alert color="danger">
        <span>{ error.errors.message }</span>
      </Alert>
    ) : null }
    <h4 className="display-4 mb-4">Change password</h4>
    <FormikForm>
      <Form>
        <Row>
          <Col xs="12" md="8">
            <FormGroup className="mb-3">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-lock" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Old password"
                  type="password"
                  id="oldPassword"
                  name="oldPassword"
                  value={values.oldPassword}
                  onChange={handleChange}
                />
              </InputGroup>
              <div className="formik-invalid-feedback">
                <ErrorMessage name="oldPassword" />
              </div>
            </FormGroup>
            <FormGroup className="mb-3">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-lock" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="New password"
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={values.newPassword}
                  onChange={handleChange}
                />
              </InputGroup>
              <div className="formik-invalid-feedback">
                <ErrorMessage name="newPassword" />
              </div>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-lock" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="New password confirmation"
                  type="password"
                  id="newPasswordConfirm"
                  name="newPasswordConfirm"
                  value={values.newPasswordConfirm}
                  onChange={handleChange}
                />
              </InputGroup>
              <div className="formik-invalid-feedback">
                <ErrorMessage name="newPasswordConfirm" />
              </div>
            </FormGroup>
            <div className="text-center">
              <Button
                className="my-4"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </FormikForm>
  </div>
)

const ChangePasswordFormFormik = withFormik({
  mapPropsToValues() {
    return {
      oldPassword: '',
      newPassword: '',
      newPasswordConfirm: ''
    }
  },
  validationSchema,
  handleSubmit(values, { props }) {
    props.changePassword(values.oldPassword, values.newPassword, values.newPasswordConfirm)
  }
})(ChangePasswordForm)

const mapStateToProps = (state) => ({
  error: state.auth.error
})

const mapDispatchToProps = (dispatch) => ({
  changePassword: (oldPassword, newPassword, newPasswordConfirm) => dispatch(authActions.changePassword(oldPassword, newPassword, newPasswordConfirm))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordFormFormik)
