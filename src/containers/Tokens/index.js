import React, { Component } from 'react'
import { ServiceTokens } from '../../services/tokens/tokens'
import CustomAlert from '../../components/Alert/CustomAlert'

class TokensPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      tokens: [],
      error: {}
    }
  }

  componentDidMount() {
    ServiceTokens.getTokens()
      .then(data => {
        this.setState({
          tokens: data.data
        })
      })
      .catch((error) => {
        this.setState({
          error: error.response.data
        })
      })
  }

  remove(id) {
    ServiceTokens.removeToken(id)
      .then(() => {
        this.props.history.push('/admin')
        this.props.history.push('/admin/tokens')
      })
      .catch((error) => {
        this.setState({
          error: error.response.data
        })
      })
  }

  render() {
    return (
      <>
        <div>Tokens Page</div>

        <CustomAlert
          error={this.state.error}
        />
        
        { this.state.tokens.length === 0 ? (
          <div>No tokens</div>
        ) : (
          this.state.tokens.map((token, index) => (
            <div key={index}>
              <p>ID: {token.id}</p>
              <p>Token: {token.token}</p>
              <p>{token.user_id ? `User: ${token.user_id}` : `Administrator: ${token.admin_id}`}</p>
              { token.user ? (
                <>
                  <p>Username: { token.user.name }</p>
                  <p>Email: { token.user.email }</p>
                </>
              ) : null }
              <button onClick={() => this.remove(token.id)}>Remove</button>
              <hr />
            </div>
          ))
        )}
      </>
    )
  }
}

export default TokensPage