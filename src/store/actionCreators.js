import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM } from './actionType'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    iptValue: value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const delItemAction = (index) => ({
    type: DEL_ITEM,
    index
})