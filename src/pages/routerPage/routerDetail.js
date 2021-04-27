import React, { Component } from 'react';

class RouterDetail extends Component {
  render () {
    return (
      <div>
        {this.props.match.params.id}
      </div>
    )
  }
}

export default RouterDetail