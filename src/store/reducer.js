import * as actionType from './actionType'
//默认数据
const defaultState = {
    iptValue: 'redux value',
    list: JSON.parse(localStorage.getItem('list')) || []
}

// state: 指的是原始仓库里的状态
const reducer =  (state = defaultState, action) => {  
    switch (action.type) {
        case actionType.CHANGE_INPUT:
            var newState = {
                ...state,
                iptValue: action.iptValue
            }
            return newState
        case actionType.ADD_ITEM: 
            var newState = JSON.parse(JSON.stringify(state))
            newState.list.push(state.iptValue)
            newState.iptValue = ''
            localStorage.setItem('list', JSON.stringify(newState.list))
            return newState
        case actionType.DEL_ITEM:
            var newState = JSON.parse(JSON.stringify(state))
            newState.list.splice(action.index, 1)
            localStorage.setItem('list', JSON.stringify(newState.list))
            return newState
        default:
            return state
    }
}

export default reducer
