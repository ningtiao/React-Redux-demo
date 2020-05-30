import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM } from './actionTypes'
const defaultState = {
    inputValue: '大白菜',
    list: [
        '早上起床',
        '中午吃饭',
        '晚上睡觉'
    ]
}

export default (state = defaultState, action) => {
    console.log(state, action)
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        console.log(newState.inputValue)
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if (action.type === DEL_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}