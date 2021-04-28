import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Com_1 from './com_1'
import Com_2 from './com_2'

class RouterDetail extends Component {
  render () {
    return (
      <div>
        <h3>router id: {this.props.match.params.id}</h3>
        <button onClick={() => {this.props.history.push('/routerPage')}}>redirect router page</button>

        <ul>
          <li>
            <Link to={'/routerDetail/' + this.props.match.params.id + '/com_1'}>Com 1</Link>
          </li>
          <li>
            <Link to={'/routerDetail/' + this.props.match.params.id + '/com_2'}>Com 2</Link>
          </li>
        </ul>

        <Route path="/routerDetail/:id/com_1" component={Com_1}></Route>
        <Route path="/routerDetail/:id/com_2" component={Com_2}></Route>
      </div>
    )
  }
}

export default RouterDetail