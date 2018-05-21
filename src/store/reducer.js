import { strictEqual } from "assert";

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action ) => {

    switch (action.type){
        case 'INCREMENT':
            // this is a copy of the old state
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            // this is technically becoming a new object
            return newState;
            // return {
            //     counter: state.counter + 1
            // }
        case 'DECREMENT':
            return {
                // take all the old values in the new objects
                // add the new property to the new object
                // distributing old state --> overriding the counter --> not touching the results
                ...state,
                counter: state.counter -1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'STORE_RESULT':
        // concat - returns new array + argument that we have added
        // this is an immutable way of adding to the array.
            // immutable means the original is immune to being touched
        // push will touch the original array
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT':
            const id = 2;
            // copy of a new array
            // const newArray = [...state.results];
            // splice out
            // newArray.splice(id, 1);

            //  below is a filter taking a function with a payload being passed in the updated Array
            const updatedArray = state.results.filter((result) => result.id !== action.resultElId );
            return {
                ...state,
                results: updatedArray
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