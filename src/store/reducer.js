import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST } from './actionTypes'
const defaultState = {
    inputValue: '大白菜',
    list: []
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

    if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        console.log(action, 'actionaction')
        newState.list = action.data
        return newState
    }

    return state
}