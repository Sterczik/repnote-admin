import { AxiosError } from 'axios'
import { useQuery, UseQueryOptions } from 'react-query'
import { IUser } from "entities"
import User from 'components/User/User'
import { ServiceUsers } from 'services/users'

function useUsers<TData = IUser[]>(
  options?: UseQueryOptions<IUser[], AxiosError, TData>
) {
  return useQuery('Users', ServiceUsers.getUsers, options)
}

const UsersPage: React.FC = () => {
  const { isLoading, error, data } = useUsers()
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>An error has occurred: { error }</div>

  return (
    <div className="px-4 py-3">
      <h4 className="display-4 mb-4">RepNote Users</h4>
      { data && data.length === 0 ? (
        <p>No users</p>
      ) : (
        data && data.map((user: IUser, index: number) => (
          <User user={user} key={index} />
        ))
      )}
    </div>
  )
}

export default UsersPage
