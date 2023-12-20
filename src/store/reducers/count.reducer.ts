const initState:number = 0

interface Action {
    type: string
    payload: number
}

const countReducer = (state = initState, action:Action) => {
    switch (action.type) {
        case "Up":
            state++
            break;
        case "Down":
            state--
            break;
    }
    
    return state
}
export default countReducer