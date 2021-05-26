import { Link } from 'react-router-dom'
import { AxiosError } from 'axios'
import { useQuery, useMutation, UseQueryOptions, useQueryClient, UseMutationResult } from 'react-query'
import {
  Button
} from 'reactstrap'
import { ServiceExerciseCategories } from 'services/exerciseCategories'
import EditExerciseCategoryForm from 'components/Forms/EditExerciseCategoryForm/EditExerciseCategoryForm'
import CustomAlert from 'components/Alert/CustomAlert'
import { IExerciseCategory } from 'entities'

function useExerciseCategory<TData = IExerciseCategory>(
  id: number,
  options?: UseQueryOptions<IExerciseCategory, AxiosError, TData>
) {
  return useQuery(['ExerciseCategories', id], () => ServiceExerciseCategories.getExerciseCategory(id), options)
}

interface IProps {
  match: {
    params: {
      id: number;
    }
  }
}

const ExerciseCategoryPage: React.FC<IProps> = (props) => {

  const { isLoading, error, data } = useExerciseCategory(props.match.params.id)

  if (isLoading) return <div>Loading...</div>
 
  if (error) return <div>An error has occurred: { error }</div>

  return (
    <div className="px-4 py-3">
      {/* <CustomAlert
        error={error}
      /> */}
      { data && data.id ? (
        <>
          <h4 className="display-4 mb-4">{ data.name }</h4>
          <EditExerciseCategoryForm
            exerciseCategory={data}
            // editExerciseCategory={this.props.editExerciseCategory}
          />
          <Button
            color="danger"
            // onClick={() => this.remove(data.id)}
            size="sm"
          >
            Remove
          </Button>
        </>
      ) : (
        <div>No exercise category</div>
      ) }
      <Button
        color="info"
        to="/admin/exerciseCategories"
        tag={Link}
        size="sm"
      >
        Back
      </Button>
    </div>
  )
}

export default ExerciseCategoryPage


// import {
//   getExerciseCategory,
//   editExerciseCategory,
//   removeExerciseCategory
// } from 'store/global/actions'

// class ExerciseCategoryPage extends Component {
//   componentDidMount() {
//     this.props.getExerciseCategory(this.props.match.params.id)
//   }

//   remove(id) {
//     this.props.removeExerciseCategory(id)
//   }
// }

// const mapStateToProps = (state) => ({
//   exerciseCategory: state.global.exerciseCategory,
//   error: state.global.error
// })

// const mapDispatchToProps = (dispatch) => ({
//   getExerciseCategory: (id) => dispatch(getExerciseCategory(id)),
//   editExerciseCategory: (id, data) => dispatch(editExerciseCategory(id, data)),
//   removeExerciseCategory: (id) => dispatch(removeExerciseCategory(id))
// })
