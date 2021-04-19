import * as actionType from './actionType'

const defaultState = {
    iptValue: 'redux value',
    list: JSON.parse(localStorage.getItem('list')) || [],
    data: []
}

const reducer =  (state = defaultState, action) => {  
    let newState = null
    switch (action.type) {
        case actionType.CHANGE_INPUT:
            newState = {
                ...state,
                iptValue: action.iptValue
            }
            return newState
        case actionType.ADD_ITEM: 
            if (!state.iptValue) {
                return state
            }
            newState = JSON.parse(JSON.stringify(state))
            newState.list.push(state.iptValue)
            newState.iptValue = ''
            localStorage.setItem('list', JSON.stringify(newState.list))
            return newState
        case actionType.DEL_ITEM:
            newState = JSON.parse(JSON.stringify(state))
            newState.list.splice(action.index, 1)
            localStorage.setItem('list', JSON.stringify(newState.list))
            return newState
        case actionType.GET_DATA:
            newState = JSON.parse(JSON.stringify(state))
            newState.data = action.data
            return newState
        default:
            return state
    }
}

export default reducer
