import React, { Component } from 'react';
import PropTypes from 'prop-types'
import axios from 'axios'
import './AddList.scss';
import store from '../../store'
import * as actionCreators from '../../store/actionCreators'
import AddListUi from './AddListUi'

class AddList extends Component {
  constructor(props) {
    super(props)
    this.state = {
        iptValue: store.getState().iptValue,
        list: store.getState().list,
        html: '<h1>我是HTML渲染</h1>',
        dataList: []
    }
    this.changeInput = this.changeInput.bind(this)
    this.entryAddList = this.entryAddList.bind(this)
    this.addList = this.addList.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    // 实时更新store数据至state
    this.storeChange = this.storeChange.bind(this)
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
    store.subscribe(this.storeChange)
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
      var data = res.data.data
      this.setState({
        dataList: data.product
      })
    }).catch(err => {
      console.log(err)
    })
  }
  
  changeInput(e) {
    const action = actionCreators.changeInputAction(e.target.value)
    store.dispatch(action)

    this.setState({
        iptValue: e.target.value
    })
  }

  addList() {
    if (!this.state.iptValue) {
      return
    }
    const action = actionCreators.addItemAction()
    store.dispatch(action)
    // this.setState({
    //     list: [...this.state.list, this.state.iptValue],
    //     iptValue: ''
    // })
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
    const action = actionCreators.delItemAction(index)
    store.dispatch(action)
    // var list = this.state.list
    // list.splice(index, 1)
    // this.setState({
    //     list: list
    // })
  }

  storeChange() {
    this.setState({
      iptValue: store.getState().iptValue,
      list: store.getState().list
    })
  }
  
  render() {
    console.log('组件挂载中')
    return (
      <AddListUi
        iptValue={this.state.iptValue}
        list={this.state.list}
        html={this.state.html}
        dataList={this.state.dataList}
        defaultMsg={this.props.defaultMsg}
        changeInput={this.changeInput}
        entryAddList={this.entryAddList}
        addList={this.addList}
        deleteItem={this.deleteItem}
      />
    )
  }
}

export default AddList;