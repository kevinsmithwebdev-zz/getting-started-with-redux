'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var todo = function todo(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) return state;else return Object.assign({}, state, {
        completed: !state.completed
      });
    // {
    //   ...todo,
    //   completed: !todo.completed
    // }
    default:
      return state;
  } // switch
};

var todos = function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_TODO':
      return [].concat(_toConsumableArray(state), [todo(undefined, action)]);
    case 'TOGGLE_TODO':
      return state.map(function (t) {
        return todo(t, action);
      });
    default:
      return state;
  }
};

//*************

var testAddTodo = function testAddTodo() {
  var stateBefore = [];
  var action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  var stateAfter = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  }];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action)).toEqual(stateAfter);
};

var testToggleTodo = function testToggleTodo() {
  var stateBefore = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  }, {
    id: 1,
    text: 'Go Shopping',
    completed: false
  }];
  var action = {
    type: 'TOGGLE_TODO',
    id: 1,
    text: 'Learn Redux'
  };
  var stateAfter = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  }, {
    id: 1,
    text: 'Go Shopping',
    completed: true
  }];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action)).toEqual(stateAfter);
};

//*************

testAddTodo();
testToggleTodo();
console.log('All tests passed.');
//# sourceMappingURL=C:\Users\Rox and Kevin\Documents\Programming\ZZZ Learning\darr\index.js.map