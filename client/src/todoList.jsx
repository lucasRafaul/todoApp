// TodoList.js
// TodoList.js
import React from 'react';
import Task from './Task';

const TodoList = ({ tasks, removeTask }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} removeTask={removeTask} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

