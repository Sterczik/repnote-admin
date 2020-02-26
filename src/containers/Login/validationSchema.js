import * as Yup from 'yup'

export default Yup.object().shape({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),

  password: Yup.string('')
    .min(6, 'Password must contain at least 6 characters')
    .max(30, 'Password must contain maximum 30 characters')
    .required('Enter your password')
})
