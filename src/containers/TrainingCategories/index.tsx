import { useQuery } from 'react-query'
import { ServiceTrainingCategories } from 'services/trainingCategories'
import TrainingCategoryForm from 'components/Forms/TrainingCategoryForm/TrainingCategoryForm2'
import { ITrainingCategory } from 'entities'
import Category from 'components/Category/Category'

const TrainingCategoriesPage: React.FC = () => {

  const { isLoading, error, data } = useQuery('TrainingCategories', () =>
    ServiceTrainingCategories.getTrainingCategories()
  )

  if (isLoading) return <div>Loading...</div>
 
  if (error) return <div>An error has occurred: { error }</div>

  return (
    <div className="px-4 py-3">
      <h4 className="display-4 mb-4">RepNote Training Categories</h4>
      { data.length === 0 ? (
        <p>No training categories</p>
      ) : (
        data.map((category: ITrainingCategory, index: number) => (
          <Category category={category} key={index} link="/admin/trainingCategories/" />
        ))
      )}
      <TrainingCategoryForm />
    </div>
  )
}

export default TrainingCategoriesPage
