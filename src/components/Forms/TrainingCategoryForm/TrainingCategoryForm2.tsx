import { useMutation, useQueryClient } from 'react-query'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Form,
  Button,
  FormGroup,
  Input,
  InputGroup,
  Row,
  Col
} from 'reactstrap'
import { ServiceTrainingCategories } from 'services/trainingCategories'
import validationSchema from './validationSchema'

interface IFormInputs {
  category: string;
}

const defaultValues: IFormInputs = {
  category: ''
}

const TrainingCategoryForm: React.FC = () => {
  const queryClient = useQueryClient()
  const { mutateAsync, isLoading: isMutating } = useMutation((name: string) => ServiceTrainingCategories.addTrainingCategory({ name }))

  const { control, handleSubmit, formState: { errors }, reset } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
    defaultValues
  });
  const onSubmit = async (data: IFormInputs) => {
    await mutateAsync(data.category)
    queryClient.invalidateQueries('TrainingCategories')
    reset(defaultValues)
  };

  return (
    <Form role="form" onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col xs="8" md="6">
          <FormGroup>
            <InputGroup className="input-group-alternative">
              <Controller
                name="category"
                control={control}
                aria-invalid={errors.category ? "true" : "false"}
                render={({ field }) => <Input {...field} type="text" placeholder="Category name" />}
              />
            </InputGroup>
            <div className="formik-invalid-feedback">
              <p>{errors.category?.message}</p>
            </div>
          </FormGroup>
        </Col>
        <Col xs="4" md="6">
          <Button
            type="submit"
            color="primary"
          >
            {isMutating ? 'Adding...': 'Add'}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default TrainingCategoryForm
