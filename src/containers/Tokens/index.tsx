import { AxiosError } from 'axios'
import { useQuery, UseQueryOptions } from 'react-query'
import { ServiceTokens } from 'services/tokens'
import { IToken } from 'entities'
import Token from 'components/Token/Token'

function useTokens<TData = IToken[]>(
  options?: UseQueryOptions<IToken[], AxiosError, TData>
) {
  return useQuery('Tokens', ServiceTokens.getTokens, options)
}

const TokensPage: React.FC = () => {
  const { isLoading, error, data, isFetching } = useTokens()

  if (isLoading) return <div>Loading...</div>
 
  if (error) return <div>An error has occurred: { error }</div>

  return (
    <div className="px-4 py-3">
      <h4 className="display-4 mb-4">RepNote Tokens</h4>
      { data && data.length === 0 ? (
        <p>No tokens</p>
      ) : (
        data && data.map((token: IToken, index: number) => (
          <Token token={token} key={index} />
        ))
      )}
    </div>
  )
}

export default TokensPage