import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Button
} from 'reactstrap'
import { IUser } from "entities"

interface IProps {
  user: IUser;
}
const User: React.FC<IProps> = ({ user }) => {
  return (
    <div className="border-bottom pb-3 mb-3">
      <Row>
        <Col sm="12" lg="4">
          <span>Name: {user.name}</span>
        </Col>
        <Col sm="12" lg="4">
          <span>Email: {user.email}</span>
        </Col>
        <Col sm="12" lg="4">
          <Button
            color="primary"
            to={'/admin/users/' + user.id}
            tag={Link}
            size="sm"
          >
            Details
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default User
