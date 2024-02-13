// Task.js
import React from 'react';
const Task = ({ task, removeTask }) => {
  return (
    <li>
      {task.text}
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </li>
  );
};

export default Task;
