const initialState = {
    counter: 0
}

const reducer = (state = initialState, action ) => {

    switch (action.type){
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                counter: state.counter -1
            }
        case 'ADD':
            return {
                counter: state.counter + action.val
            }
        case 'SUBTRACT':
            return {
                counter: state.counter - action.val
            }
    }

    // if(action.type === 'INCREMENT'){
    //     return {
    //         // below is an immutable state
    //         // ...state
    //         counter: state.counter + 1
    //     }
    // } else if (action.type === 'DECREMENT'){
    //     return {
    //         counter: state.counter -1
    //     }
    // } else if ( action.type === 'ADD'){
    //     return { 
    //         counter: state.counter + action.val
    //     }
    // } else if (action.type === 'SUBTRACT'){
    //     return {
    //         counter: state.counter - action.val
    //     }
    // }

    // return the current state to not break the application
    return state
}

export default reducer;