import React from 'react'
import { Alert } from 'reactstrap'

const CustomAlert = (props) => {
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
