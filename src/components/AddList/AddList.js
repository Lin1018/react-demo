import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './AddList.scss';
import store from '../../store'
import * as actionCreators from '../../store/actionCreators'
import AddListUi from './AddListUi'
import 'antd/dist/antd.css'

class AddList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      html: '<h1>我是HTML渲染</h1>'
    }
    // this.state = {
    //     iptValue: '',
    //     list: [],
    //     dataList: []
    // }
    // this.changeInput = this.changeInput.bind(this)
    // this.entryAddList = this.entryAddList.bind(this)
    // this.addList = this.addList.bind(this)
    // this.deleteItem = this.deleteItem.bind(this)
    // 实时更新store数据至state
    // this.storeChange = this.storeChange.bind(this)
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
    // store.subscribe(this.storeChange)
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
    const action = actionCreators.getTodoData()
    store.dispatch(action)
  }
  
  // changeInput(e) {
  //   const action = actionCreators.changeInputAction(e.target.value)
  //   store.dispatch(action)
  // }

  // addList() {
  //   if (!this.state.iptValue) {
  //     return
  //   }
  //   const action = actionCreators.addItemAction()
  //   store.dispatch(action)
  // }

  // entryAddList(e) {
  //   if (!this.state.iptValue) {
  //     return
  //   }
  //   if (e.keyCode === 13) {
  //       this.setState({
  //           list: [...this.state.list, this.state.iptValue],
  //           iptValue: ''
  //       })
  //   }
  // }

  // deleteItem(index) {
  //   const action = actionCreators.delItemAction(index)
  //   store.dispatch(action)
  // }

  // storeChange() {
  //   this.setState({
  //     iptValue: store.getState().iptValue,
  //     list: store.getState().list,
  //     dataList: store.getState().data,
  //   })
  // }
  
  render() {
    console.log('组件挂载中')
    let { iptValue, list, dataList, defaultMsg, changeInput, entryAddList, addList, deleteItem } = this.props
    return (
      <AddListUi
        iptValue={iptValue}
        list={list}
        html={this.state.html}
        dataList={dataList}
        defaultMsg={defaultMsg}
        changeInput={changeInput}
        entryAddList={entryAddList}
        addList={addList}
        deleteItem={deleteItem}
      />
    )
  }
}

const stateToProps = (state) => {
  return {
    iptValue: state.iptValue,
    list: state.list,
    dataList: state.data
  }
}

const dispatchToProps = (dispatch, ownProps) => {
  return {
    changeInput(e) {
      const action = actionCreators.changeInputAction(e.target.value)
      dispatch(action)
    },
    addList() {
      const action = actionCreators.addItemAction()
      dispatch(action)
    },
    entryAddList(e) {
      if (e.keyCode === 13) {
        const action = actionCreators.addItemAction()
        dispatch(action)
      }
    },
    deleteItem(index) {
      const action = actionCreators.delItemAction(index)
      store.dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(AddList)