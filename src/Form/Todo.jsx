import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [
      { id: 1, text: 'Create a new portfolio site' },
      { id: 2, text: 'This is sample todo' },
      { id: 3, text: 'Redesign website' },
    ];
  });

  const [newTodo, setNewTodo] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addOrUpdateTodo = () => {
    if (newTodo.trim() !== '') {
      if (editTodoId) {
        setTodos(todos.map(todo => todo.id === editTodoId ? { ...todo, text: newTodo.trim() } : todo));
        setEditTodoId(null);
      } else {
        setTodos([...todos, { id: uuidv4(), text: newTodo.trim(), isCompleted: false }]);
      }
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const confirmationmsg = (id) => {
    if (window.confirm("Are you sure you want to delete") === true) {
      deleteTodo(id);
    } else {
      alert("Error try again");
    }
  };

  const startEditTodo = (todo) => {
    setEditTodoId(todo.id);
    setNewTodo(todo.text);
  };

  return (
    <div className="max-w-6xl mx-auto my-40 bg-green-200 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 mx-2.5">Todo App</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-grow p-2 rounded-l-lg border border-gray-300 focus:outline-none"
          placeholder="Add your new todo"
        />
        <button
          onClick={addOrUpdateTodo}
          className="bg-purple-500 text-white px-4 py-2 rounded-r-lg hover:bg-purple-600 focus:outline-none"
        >
          {editTodoId ? 'Update' : '+'}
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between bg-white p-2 mb-2 rounded-lg shadow">
            <span>{todo.text}</span>
            <div>
              <button
                onClick={() => startEditTodo(todo)}
                className="text-blue-500 hover:text-blue-700 mr-2"
              >
                ✏️
              </button>
              <button
                onClick={() => confirmationmsg(todo.id)}
                className="text-red-500 hover:text-red-700 px-2"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between items-center">
        <span>You have {todos.length} pending tasks</span>
        <button
          onClick={clearTodos}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 focus:outline-none"
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default TodoApp;
