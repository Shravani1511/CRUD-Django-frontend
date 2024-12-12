// import React, { useState } from 'react';
// import '../styles/TaskForm.css';

// const TaskForm = ({ addTask }) => {
//   const [task, setTask] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (task.trim()) {
//       addTask(task);
//       setTask('');
//     }
//   };

//   return (
//     <form className="task-form" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="Add a new task"
//       />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default TaskForm;





import React, { useState } from 'react';
import '../styles/TaskForm.css';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && text.trim()) {
      addTask({ title, text, completed: false }); // Adjusted structure
      setTitle('');
      setText('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Task description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
