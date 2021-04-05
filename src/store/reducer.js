//默认数据
const defaultState = {
    iptValue: 'redux value',
    list: [
        'aaaa',
        'bbbb'
    ]
}

// state: 指的是原始仓库里的状态
// action: 指的是action新传递的状态
export default (state = defaultState, action) => {  
    if (action.type === 'inputChange') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.iptValue = action.iptValue
        return newState
    } else if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.iptValue)
        newState.iptValue = ''

        return newState
    }

    return state
}
