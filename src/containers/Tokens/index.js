import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Row,
  Col,
  Button
} from 'reactstrap'

import {
  getTokens,
  removeToken
} from 'store/global/actions'

class TokensPage extends Component {
  componentDidMount() {
    this.props.getTokens()
  }

  remove(id) {
    this.props.removeToken(id)
  }

  render() {
    return (
      <div className="px-4 py-3">
        <h4 className="display-4 mb-4">RepNote Tokens</h4>
        { this.props.tokens.length === 0 ? (
          <p>No tokens</p>
        ) : (
          this.props.tokens.map((token, index) => (
            <div key={index} className="border-bottom pb-3 mb-3">
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
                    onClick={() => this.remove(token.id)}
                    color="primary"
                    size="sm"
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </div>
          ))
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tokens: state.global.tokens
})

const mapDispatchToProps = (dispatch) => ({
  getTokens: () => dispatch(getTokens()),
  removeToken: (id) => dispatch(removeToken(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TokensPage)