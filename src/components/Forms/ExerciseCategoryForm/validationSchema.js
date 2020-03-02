import * as Yup from 'yup'

export default Yup.object().shape({
  category: Yup.string('Enter category name')
    .required('Name is required'),
})
