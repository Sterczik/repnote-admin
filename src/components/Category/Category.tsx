import { IExerciseCategory, ITrainingCategory } from 'entities'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Button
} from 'reactstrap'

interface IProps {
  category: ITrainingCategory | IExerciseCategory;
  link: string;
}
const Category: React.FC<IProps> = ({ category, link }) => {
  return (
    <div className="border-bottom pb-3 mb-3">
      <Row>
        <Col sm="12" lg="6">
          <span>Name: { category.name }</span>
        </Col>
        <Col sm="12" lg="6">
          <Button
            color="primary"
            to={link + category.id}
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

export default Category