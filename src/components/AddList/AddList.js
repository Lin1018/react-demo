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
    const action = actionCreators.getTodoData()
    store.dispatch(action)
  }
  
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