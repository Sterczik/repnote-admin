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
              <p>{token.token}</p>
              <p>{token.user_id}</p>
              <p>{token.id}</p>
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