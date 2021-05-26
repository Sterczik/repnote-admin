import { Alert } from 'reactstrap'

interface IProps {
  error: {
    status: string;
    err: {
      code: string;
      detail: string;
      table: string;
      constraint: string;
    }
  }
}
const CustomAlert: React.FC<IProps> = (props: IProps) => {
  return (
    <>
      { props.error && props.error.status === 'error' ? (
        <Alert color="danger">
          <span><strong>Code: </strong>{ props.error.err.code } | </span>
          <span><strong>Detail: </strong>{ props.error.err.detail } | </span>
          <span><strong>Table: </strong>{ props.error.err.table } | </span>
          <span><strong>Constraint: </strong>{ props.error.err.constraint } | </span>
        </Alert>
      ) : null }
    </>
  )
}

export default CustomAlert
