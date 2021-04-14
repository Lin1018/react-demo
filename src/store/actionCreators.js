import * as actionType from './actionType'

export const changeInputAction = (value) => ({
    type: actionType.CHANGE_INPUT,
    iptValue: value
})

export const addItemAction = () => ({
    type: actionType.ADD_ITEM
})

export const delItemAction = (index) => ({
    type: actionType.DEL_ITEM,
    index
})