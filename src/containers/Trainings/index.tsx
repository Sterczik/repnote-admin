import { AxiosError } from 'axios'
import { useQuery, UseQueryOptions } from 'react-query'
import { ITraining } from "entities"
import Training from 'components/Training/Training'
import { ServiceTrainings } from 'services/trainings'

function useTrainings<TData = ITraining[]>(
  options?: UseQueryOptions<ITraining[], AxiosError, TData>
) {
  return useQuery('Trainings', ServiceTrainings.getTrainings, options)
}

const TrainingsPage: React.FC = () => {
  const { isLoading, error, data } = useTrainings()
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>An error has occurred: { error }</div>

  return (
    <div className="px-4 py-3">
      <h4 className="display-4 mb-4">RepNote Trainings</h4>
      { data && data.length === 0 ? (
        <p>No trainings</p>
      ) : (
        data && data.map((training: ITraining, index: number) => (
          <Training training={training} key={index} />
        ))
      )}
    </div>
  )
}

export default TrainingsPage
