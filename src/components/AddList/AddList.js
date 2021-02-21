import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './AddList.css';

class AddList extends Component {
  constructor(props) {
    super(props)
    this.state = {
        iptValue: '',
        list: ['服务1', '服务2'],
        html: '<h1>我是HTML渲染</h1>',
        dataList: []
    }
  }

  static propTypes = {
    msg: PropTypes.string,
    requiredMsg: PropTypes.number.isRequired
  }

  static defaultProps = {
    defaultMsg: '我是默认数据defaultMsg'
  }

  componentWillMount() {
    console.log('组件挂载前')
  }

  componentDidMount() {
    console.log('组件挂载后')

    this.getData()
  }

  shouldComponentUpdate() {
    console.log('组件发生改变前')
    return true
  }

  componentWillUpdate() {
    console.log('组件更新前')
  }

  componentDidUpdate() {
    console.log('组件更新后')
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    console.log('接收到父组件传递的props参数')
  }

  componentWillUnmount() {
    console.log('组件卸载')
  }

  getData() {
    axios({
      url: 'http://www.xpxux.com/api/products/get',
      method: 'GET',
      params: {
        pageNumber: 1,
        pageSize: 5
      }
    }).then(res => {
      console.log(res)
      var data = res.data.data
      this.setState({
        dataList: data.product
      })
    }).catch(err => {
      console.log(err)
    })
  }
  
  inputChange(e) {
    console.log(this.myInput)
    this.setState({
        iptValue: e.target.value
    })
  }

  addList() {
    if (!this.state.iptValue) {
      return
    }
    this.setState({
        list: [...this.state.list, this.state.iptValue],
        iptValue: ''
    })
  }

  entryAddList(e) {
    if (!this.state.iptValue) {
      return
    }
    if (e.keyCode === 13) {
        this.setState({
            list: [...this.state.list, this.state.iptValue],
            iptValue: ''
        })
    }
  }

  deleteItem(index) {
    var list = this.state.list
    list.splice(index, 1)
    this.setState({
        list: list
    })
  }
  
  render() {
    console.log('组件挂载中')
    return (
      <Fragment>
        <div className="add-list">
          <div>
              <h3>这是AddList组件</h3>
              <label htmlFor="input">输入服务：</label>
              <input 
                  id="input"
                  value={this.state.iptValue} 
                  onChange={this.inputChange.bind(this)} 
                  onKeyDown={this.entryAddList.bind(this)}
                  ref={(input) => {this.myInput = input}}
              />
              <button onClick={this.addList.bind(this)}>增加服务</button>
          </div>
          <ul ref={(ul) => {this.ul = ul}}>
            <TransitionGroup>
              {
                  this.state.list.map((item, index) => {
                      return (
                        <CSSTransition
                          timeout={1000}
                          classNames='boss-text'
                          unmountOnExit
                          appear={true}
                          key={index+item} 
                        >
                          <li className="item" onClick={this.deleteItem.bind(this, index)}>{item}</li>
                        </CSSTransition>
                      )
                  })
              }
            </TransitionGroup>
          </ul>

          <div dangerouslySetInnerHTML={{__html: this.state.html}}></div>
          <span>{this.props.defaultMsg}</span>

          <ul>
            {
              this.state.dataList.map((item, index) => {
                return (
                  <li key={index}>{item.title}</li>
                )
              })
            }
          </ul>
        </div>
      </Fragment>
    )
  }
}

export default AddList;