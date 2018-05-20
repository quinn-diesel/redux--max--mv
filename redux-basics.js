// this is the node js syntax
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// ----- REDUCER
// = is the default value
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

// ----- STORE
// needs to initialised with reducer
// only one reducer - only thing that will update the store

const store = createStore(rootReducer);
console.log(store.getState());

// ----- SUBSCRIPTION
// this is so we don't have to call getState
// they say when you need to have a new state
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});
// getting triggered whenever the state is updated

// ------ DISPATCHING ACTION
//inc = increment
store.dispatch({type: 'INC_COUNTER'});

store.dispatch({type: 'ADD_COUNTER', value: 10});

console.log(store.getState());


