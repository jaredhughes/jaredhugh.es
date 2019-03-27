import React from 'react'

interface IProps {
  statusCode: number
}

class Error extends React.Component<IProps, {}> {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null

    return { statusCode }
  }

  renderMessage = (statusCode: number) => {
    if (statusCode === 404) {
      return (
        <div className='404'>
          <h2>404</h2>
          <p>Page not found.</p>
        </div>
      )
    } else {
      return <p>An unknown error occurred.</p>
    }
  }

  render() {
    const { statusCode } = this.props

    return <div className='content'>{this.renderMessage(statusCode)}</div>
  }
}

export default Error
