'use strict';

var toggleTodo = function toggleTodo(todo) {
  return Object.assign({}, todo, {
    completed: !todo.completed
  });
  // return {
  //   ...todo,
  //   completed: !todo.completed
  // }
};

var testToggleTodo = function testToggleTodo() {
  var todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };

  var todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };

  deepFreeze(todoBefore);

  expect(toggleTodo(todoBefore)).toEqual(todoAfter);
};

testToggleTodo();
console.log('All tests passed');
//# sourceMappingURL=C:\Users\Rox and Kevin\Documents\Programming\ZZZ Learning\darr\index.js.map