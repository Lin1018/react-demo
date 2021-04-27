import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class RouterPage extends Component {
  constructor () {
    super()
    this.state = {
      list: [{
        id: 1,
        title: '文章1'
      }, {
        id: 2,
        title: '文章2'
      }]
    }
  }

  render () {
    return (
      <div>
        <h3>router page</h3>
        <ul>
          {
            this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={'/routerDetail/' + item.id}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default RouterPage