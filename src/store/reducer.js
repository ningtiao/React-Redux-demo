// const defaultState = {
//     inputValue: '大白菜',
//     list: [
//         '早上起床',
//         '中午吃饭',
//         '晚上睡觉打豆豆'
//     ]
// }

// export default (state = defaultState, action) => {
//     console.log(state, action)
//     // reducer里只能接受state, 不能改变state
//     // 处理玩逻辑需要返回State
//     if (action.type === 'changeInput') {
//         let newState = JSON.parse(JSON.stringify(state))
//         newState.inputValue = action.value
//         return newState
//     }

//     if (action.type === 'addItem') {
//         let newState = JSON.parse(JSON.stringify(state))
//         newState.list.push(newState.inputValue)
//         newState.inputValue = ''
//         return newState
//     }

//     if (action.type === 'deleteItem') {
//         let newState = JSON.parse(JSON.stringify(state))
//         newState.list.splice(action.index, 1)
//         return newState
//     }

//     return state
// }

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
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state))
        console.log(newState.inputValue)
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if (action.type === 'deleleItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}