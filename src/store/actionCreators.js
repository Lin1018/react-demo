import axios from 'axios'
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

export const getDataAction = (data) => ({
    type: actionType.GET_DATA,
    data
})

export const getTodoData = () => {
    return (dispatch) => {
        axios({
            url: 'http://www.xpxux.com/api/products/get',
            method: 'GET',
            params: {
                
              pageNumber: 1,
              pageSize: 5
            }
        }).then(res => {
            var data = res.data.data.product
            const action = getDataAction(data)
            dispatch(action)
        }).catch(err => {
            console.log(err)
        })
    }
}
