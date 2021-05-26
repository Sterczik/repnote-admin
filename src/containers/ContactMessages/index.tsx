import { AxiosError } from 'axios'
import { useQuery, UseQueryOptions } from 'react-query'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Button
} from 'reactstrap'
import { ServiceContactMessages } from 'services/contactMessages'
import { IContactMessage } from 'entities'

function useContactMessages<TData = IContactMessage[]>(
  options?: UseQueryOptions<IContactMessage[], AxiosError, TData>
) {
  return useQuery('Contact Messages', ServiceContactMessages.getContactMessages, options)
}

const ContactMessagesPage: React.FC = () => {

  // const { isLoading, error, data, isFetching } = useQuery('Contact Messages', () =>
  //   ServiceContactMessages.getContactMessages()
  // )

  const { isLoading, error, data, isFetching } = useContactMessages()

  if (isLoading) return <div>Loading...</div>
 
  if (error) return <div>An error has occurred: { error }</div>

  return (
    <div className="px-4 py-3">
      <h4 className="display-4 mb-4">RepNote Contact Messages</h4>
      {/* <div>{isFetching ? "Updating..." : ""}</div> */}
      { data && data.length === 0 ? (
        <p>No contact messages</p>
      ) : (
        data && data.map((message: IContactMessage, index: number) => (
          <div key={index} className="border-bottom pb-3 mb-3">
            <Row>
              <Col sm="12" lg="4">
                <span>From: {message.name}</span>
              </Col>
              <Col sm="12" lg="4">
                <span>Email: {message.email}</span>
              </Col>
              <Col sm="12" lg="4">
                <Button
                  color="primary"
                  to={'/admin/contactMessages/' + message.id}
                  tag={Link}
                  size="sm"
                >
                  Details
                </Button>
              </Col>
            </Row>
          </div>
        ))
      )}
    </div>
  )
}

export default ContactMessagesPage
