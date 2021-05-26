import { IToken } from "entities"
import { useMutation, useQueryClient } from "react-query"
import {
  Row,
  Col,
  Button
} from 'reactstrap'
import { ServiceTokens } from 'services/tokens'

interface IProps {
  token: IToken;
}
const Token: React.FC<IProps> = ({ token }) => {
  const queryClient = useQueryClient()
  const { mutateAsync } = useMutation((id: number) => ServiceTokens.removeToken(id))

  const remove = async (id: number) => {
    await mutateAsync(id)
    queryClient.invalidateQueries('Tokens')
  }

  return (
    <div className="border-bottom pb-3 mb-3">
      <Row>
        <Col sm="12" lg="2">
          <span>ID: {token.id}</span>
        </Col>
        <Col sm="12" lg="4">
          <span>Token: {token.token}</span>
        </Col>
        <Col sm="12" lg="4">
          <p>{token.user_id ? `User: ${token.user_id}` : `Administrator: ${token.admin_id}`}</p>
          { token.user ? (
            <>
              <p>Username: { token.user.name }</p>
              <p>Email: { token.user.email }</p>
            </>
          ) : null }
        </Col>
        <Col sm="12" lg="2">
          <Button
            onClick={() => remove(token.id)}
            color="primary"
            size="sm"
          >
            Remove
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Token