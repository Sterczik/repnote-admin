import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Button
} from 'reactstrap'
import { ITraining } from "entities"

interface IProps {
  training: ITraining;
}
const Training: React.FC<IProps> = ({ training }) => {
  return (
    <div className="border-bottom pb-3 mb-3">
      <Row>
        <Col sm="12" lg="4">
          <span>Name: {training.name}</span>
        </Col>
        <Col sm="12" lg="4">
          <span>Username: {training.user.name}</span>
        </Col>
        <Col sm="12" lg="4">
          <Button
            color="primary"
            to={'/admin/trainings/' + training.id}
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

export default Training
