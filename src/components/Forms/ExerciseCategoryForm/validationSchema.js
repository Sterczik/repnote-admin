import * as Yup from 'yup'

export default Yup.object().shape({
  category: Yup.string()
    .required('Name is required'),
})
