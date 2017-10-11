const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id)
        return state
      else
        return Object.assign({}, state, {
          completed: !state.completed
        })
        // {
        //   ...todo,
        //   completed: !todo.completed
        // }
    default:
      return state
  } // switch
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state
  }
}

//*************

const {createStore } = Redux
const store = createStore(todos)

//*************

console.log('Intitial state:')
console.log(store.getState())
console.log('--------------')

console.log('Dispatching ADD_TODO')
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
})
console.log('Current state:')
console.log(store.getState())
console.log('--------------')

console.log('Dispatching ADD_TODO')
store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'Go Shopping'
})
console.log('Current state:')
console.log(store.getState())
console.log('--------------')

console.log('Dispatching TOGGLE_TODO')
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 0
})
console.log('Current state:')
console.log(store.getState())
console.log('--------------')
