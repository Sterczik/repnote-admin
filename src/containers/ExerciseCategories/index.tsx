import { AxiosError } from 'axios'
import { useQuery, UseQueryOptions } from 'react-query'
import { ServiceExerciseCategories } from 'services/exerciseCategories'
import ExerciseCategoryForm from 'components/Forms/ExerciseCategoryForm/ExerciseCategoryForm2'
import { IExerciseCategory } from 'entities'
import Category from 'components/Category/Category'

function useExerciseCategories<TData = IExerciseCategory[]>(
  options?: UseQueryOptions<IExerciseCategory[], AxiosError, TData>
) {
  return useQuery('ExerciseCategories', ServiceExerciseCategories.getExerciseCategories, options)
}

const ExerciseCategoriesPage: React.FC = () => {

  const { isLoading, error, data } = useExerciseCategories()

  if (isLoading) return <div>Loading...</div>
 
  if (error) return <div>An error has occurred: { error }</div>

  return (
    <div className="px-4 py-3">
      <h4 className="display-4 mb-4">RepNote Exercise Categories</h4>
      { data && data.length === 0 ? (
        <p>No exercise categories</p>
      ) : (
        data && data.map((category: IExerciseCategory, index: number) => (
          <Category category={category} key={index} link="/admin/exerciseCategories/" />
        ))
      )}
      <ExerciseCategoryForm />
    </div>
  )
}

export default ExerciseCategoriesPage
