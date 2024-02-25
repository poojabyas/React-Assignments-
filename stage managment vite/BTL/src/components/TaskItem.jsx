import React from 'react';

function TaskItem({ item, onDelete, onToggle }) {
  return (
    <div style={{ color: item.completed ? 'green' : 'red' }}>
      <p>{item.task}</p>
      <p>Assigned to: {item.taskAssignedTo}</p>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onToggle(item)}
      />
      <button onClick={() => onDelete(item)}>Delete Task</button>
    </div>
  );
}

export default TaskItem;
