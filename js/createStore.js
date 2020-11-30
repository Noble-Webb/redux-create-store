// Every piece of code that would be common to any JavaScript application following this pattern is wrapped inside of the createStore function.

// createStore's dispatch method works by having an action dispatched, which calls a reducer, and then renders the view.
function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState
  };
};

// Any code that is particular to our application is outside that function.

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};

function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};


 // createStore takes the reducer as an argument
let store = createStore(reducer);
store.dispatch({ type: '@@INIT' });
let button = document.getElementById('button');

button.addEventListener('click', () => {
    store.dispatch({ type: 'INCREASE_COUNT' });
})