import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST } from './actionTypes'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const delItemAction = (index) => ({
    type: DEL_ITEM,
    index
})

export const getDatalist = (data) => ({
    type: GET_LIST,
    data
})


export const getToList = () => {
    return (dispatch) => {
    // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {

        // })
        const data = [
            '早上起床',
            '中午吃饭',
            '晚上睡觉'
        ]
        const action = getDatalist(data)
        dispatch(action)
    }
}