import React, { useEffect, useState } from 'react';
import { API_BASE } from '../api/api'; // Import the centralized API endpoint
import TaskList from './TaskList';
import TaskForm from './TaskForm';


const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend
  const fetchTasks = async () => {
    try {
      const response = await fetch(API_BASE);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Add a new task
    const addTask = async (task) => {
    try {
      const response = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      });
      if (response.ok) {
        const newTask = await response.json();
        setTasks((prevTasks) => [...prevTasks, newTask]);
      } else {
        console.error('Failed to add task:', await response.text());
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };
  

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await fetch(`${API_BASE}${id}/`, { method: 'DELETE' });
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Update a task
  const updateTask = async (id, updatedText) => {
    try {
      const response = await fetch(`${API_BASE}${id}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: updatedText }),
      });
      if (response.ok) {
        const updatedTask = await response.json();
        setTasks((prevTasks) =>
          prevTasks.map((task) => (task.id === id ? updatedTask : task))
        );
      } else {
        const errorData = await response.json()
        console.error("Failed to update task:", errorData);
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };
  

  // Toggle task completion
  const toggleTaskCompletion = async (id) => {
    try {
      const taskToToggle = tasks.find((task) => task.id === id);
      const response = await fetch(`${API_BASE}${id}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !taskToToggle.completed }),
      });
      const updatedTask = await response.json();
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? updatedTask : task))
      );
    } catch (error) {
      console.error("Error toggling task completion:", error);
    }
  };

  useEffect(() => {
    fetchTasks(); // Load tasks on component mount
  }, []);

  return (
    <div>
      <h1 className = "heading">Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
};

export default TaskManager;
