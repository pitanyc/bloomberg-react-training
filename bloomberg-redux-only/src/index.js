import { createStore } from 'redux';

let initialState = {
  contacts: []
};

let contactReducer = function(state = initialState, action) {
  console.log(`contactReducer: state is:`, state, `, action is:`, action);

  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.contact]
      };
    default:
      return state;
  }
}

let store = createStore(contactReducer, myEnhancer);

console.log('store:', store);

store.subscribe(() => {
	console.log('SUBSCRIBER:', store.getState().contacts);
});

store.subscribe(() => {
	console.log('SUBSCRIBER2: something changed!', store.getState().contacts);
});

store.dispatch({
  type: 'ADD_CONTACT',
  contact: {
    name: 'Peter',
    address: 'Ireland'
  }
});

store.dispatch({
  type: 'WEIRD_ACTION'
})

console.log(`store state:`, store.getState());

//////////////////

function myEnhancer(createStore) {
  console.log('myEnhancer');

  return function(reducer, preloadedState) {
    console.log('Enhancing store...');

    let realStore = createStore(reducer, preloadedState);
    let enhancedStore = {
      dispatch(action, reducer) {
        console.log('enhancedStore: dispatch', action);
        return realStore.dispatch(action, reducer);
      },
      getState() {
        console.log('enhancedStore: getState');
        return realStore.getState();
      },
      subscribe(listener) {
        console.log('enhancedStore: subscribe');
        return realStore.subscribe(listener);
      }
    };
    return enhancedStore;
  }
}
