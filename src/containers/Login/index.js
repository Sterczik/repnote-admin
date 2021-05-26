import { connect } from 'react-redux'
import { withFormik, Form as FormikForm, ErrorMessage } from 'formik'
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Alert
} from 'reactstrap'

import validationSchema from './validationSchema'
import { authActions } from 'store/auth/actions'

const LoginForm = ({
  values,
  handleChange,
  error
}) => (
  <Col lg="5" md="7">
    <Card className="bg-secondary shadow border-0">
      <CardBody className="px-lg-5 py-lg-5">
        { error.errors && error.errors.message ? (
          <Alert color="danger">
            <span>{ error.errors.message }</span>
          </Alert>
        ) : null }
        <div className="text-center text-muted mb-4">
          <small>Sign in with credentials</small>
        </div>
        <FormikForm>
          <Form role="form">
            <FormGroup className="mb-3">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </InputGroup>
              <div className="formik-invalid-feedback">
                <ErrorMessage name="email" />
              </div>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-lock-circle-open" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Password"
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </InputGroup>
              <div className="formik-invalid-feedback">
                <ErrorMessage name="password" />
              </div>
            </FormGroup>
            <div className="text-center">
              <Button className="my-4" color="primary" type="submit">
                Sign in
              </Button>
            </div>
          </Form>
        </FormikForm>
      </CardBody>
    </Card>
  </Col>
)

const LoginFormFormik = withFormik({
  mapPropsToValues() {
    return {
      email: '',
      password: ''
    }
  },
  validationSchema,
  handleSubmit(values, { props }) {
    props.login(values.email, values.password)
  }
})(LoginForm)

const mapStateToProps = (state) => ({
  error: state.auth.error
})

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(authActions.login(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormFormik)
