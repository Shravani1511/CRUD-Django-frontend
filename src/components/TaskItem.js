// import React, { useState } from 'react';
// import '../styles/TaskItem.css';

// const TaskItem = ({ task,  updateTask, deleteTask, toggleTaskCompletion }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [newText, setNewText] = useState(task.text);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleUpdate = () => {
//     updateTask(task.id, newText);
//     setIsEditing(false);
//   };

  

//   return (
//     <div className={`task-item ${task.completed ? 'completed' : ''}`}>
//       {isEditing ? (
//         <div className="task-editing">
//           <input
//             type="text"
//             value={newText}
//             onChange={(e) => setNewText(e.target.value)}
//           />
//           <button onClick={handleUpdate} className="save-btn">Save</button>
//         </div>
//       ) : (
//         <div className="task-content">
//           <span className="task-text">{task.text}</span>
//           <div className="task-actions">
//             <button className="edit-btn" onClick={handleEdit}>Edit</button>
//             <button
//               className="complete-btn"
//               onClick={() => toggleTaskCompletion(task.id)}
//             >
//               {task.completed ? 'Undo' : 'Completed'}
//             </button>
//             <button className="delete-btn" onClick={() => deleteTask(task.id)}>
//               Delete
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TaskItem;




// import React, { useState } from 'react';
// import '../styles/TaskItem.css';

// const TaskItem = ({ task, updateTask, deleteTask, toggleTaskCompletion }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [newText, setNewText] = useState(task.text);

//   // Toggle task completion (completed or undo)
//   const handleToggle = () => {
//     toggleTaskCompletion(task.id, !task.completed);
//   };

//   // Start editing mode
//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   // Save the updated task
//   const handleUpdate = () => {
//     updateTask(task.id, newText);
//     setIsEditing(false); // Exit editing mode
//   };

//   // Handle deleting the task
//   const handleDelete = () => {
//     deleteTask(task.id);
//   };

//   return (
//     <div className={`task-item ${task.completed ? 'completed' : ''}`}>
//       {isEditing ? (
//         <div className="task-editing">
//           <input
//             type="text"
//             value={newText}
//             onChange={(e) => setNewText(e.target.value)}
//           />
//           <button onClick={handleUpdate} className="save-btn">Save</button>
//         </div>
//       ) : (
//         <div className="task-content">
//           <span className="task-text">{task.text}</span>
//           <div className="task-actions">
//             <button className="edit-btn" onClick={handleEdit}>Edit</button>
//             <button
//               className="complete-btn"
//               onClick={handleToggle}
//             >
//               {task.completed ? 'Undo' : 'Completed'}
//             </button>
//             <button className="delete-btn" onClick={handleDelete}>
//               Delete
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TaskItem;




// import React, { useState } from 'react';
// import '../styles/TaskItem.css';

// const TaskItem = ({ task, updateTask, deleteTask, toggleTaskCompletion }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [newText, setNewText] = useState(task.text);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleUpdate = async () => {

//     // Check if the new text is different before sending an update
//     if (newText !== task.text) {
//       try {
//         // Call the update function passed as a prop
//         await updateTask(task.id, {text:newText});
//         setIsEditing(false); // Close the edit mode after successful update
//       } catch (error) {
//         console.error("Error updating task:", error);
//       }
//     } else {
//       setIsEditing(false); // Close the edit mode if no changes
//     }
//   };

//   return (
//     <div className={`task-item ${task.completed ? 'completed' : ''}`}>
//         <div><strong>ID:</strong> {task.id}</div>
//         <div><strong>Title:</strong> {task.title}</div>
//         <div><strong>Description:</strong></div>
//       {isEditing ? (
//         <div className="task-editing">
//           <input
//             type="text"
//             value={newText}
//             onChange={(e) => setNewText(e.target.value)}
//           />
//           <button onClick={handleUpdate} className="save-btn">Save</button>
//         </div>
//       ) : (
//         <div className="task-content">
//           <span className="task-text">{task.text}</span>
//           <div className="task-actions">
//             <button className="edit-btn" onClick={handleEdit}>Edit</button>
//             <button
//               className="complete-btn"
//               onClick={() => toggleTaskCompletion(task.id)}
//             >
//               {task.completed ? 'Undo' : 'Completed'}
//             </button>
//             <button className="delete-btn" onClick={() => deleteTask(task.id)}>
//               Delete
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TaskItem;



import React, { useState } from 'react';
import '../styles/TaskItem.css';

const TaskItem = ({ task, updateTask, deleteTask, toggleTaskCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = async () => {
    // Check if the new text is different before sending an update
    if (newText !== task.text) {
      try {
        // Call the update function passed as a prop
        await updateTask(task.id, newText);
        setIsEditing(false); // Close the edit mode after successful update
      } catch (error) {
        console.error("Error updating task:", error);
      }
    } else {
      setIsEditing(false); // Close the edit mode if no changes
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-details">
        <div><strong>ID:</strong> {task.id}</div>
        <div><strong>Title:</strong> {task.title}</div>
        <div><strong>Description:</strong> {task.text}</div>
      </div>
      
      {isEditing ? (
        <div className="task-editing">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleUpdate} className="save-btn">Save</button>
        </div>
      ) : (
        <div className="task-actions">
          <button className="edit-btn" onClick={handleEdit}>Edit</button>
          <button
            className="complete-btn"
            onClick={() => toggleTaskCompletion(task.id)}
          >
            {task.completed ? 'Undo' : 'Completed'}
          </button>
          <button className="delete-btn" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
