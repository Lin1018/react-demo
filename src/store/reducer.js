import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM } from './actionType'
//默认数据
const defaultState = {
    iptValue: 'redux value',
    list: JSON.parse(localStorage.getItem('list'))
}

// state: 指的是原始仓库里的状态
// action: 指的是action新传递的状态
const rerducer =  (state = defaultState, action) => {  
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.iptValue = action.iptValue
        return newState
    } else if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.iptValue)
        newState.iptValue = ''
        localStorage.setItem('list', JSON.stringify(newState.list))
        return newState
    } else if (action.type === DEL_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        localStorage.setItem('list', JSON.stringify(newState.list))
        return newState
    }

    return state
}

export default rerducer
