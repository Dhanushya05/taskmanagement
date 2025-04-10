import React, { useState } from "react";
import axios from "axios";
import "./TaskForm.css";

const TaskForm = ({ refreshTasks }) => {
    const [newTask, setNewTask] = useState({ title: "", description: "", priority: "Medium" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };

    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/tasks", newTask);
            refreshTasks();  // Refresh the task list after adding a new task
            setNewTask({ title: "", description: "", priority: "Medium" });
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    return (
        <form onSubmit={handleAddTask} className="task-form">
            <input
                type="text"
                name="title"
                value={newTask.title}
                onChange={handleInputChange}
                placeholder="Enter Task Title"
                required
            />
            <textarea
                name="description"
                value={newTask.description}
                onChange={handleInputChange}
                placeholder="Enter Task Description"
                required
            ></textarea>
            <select name="priority" value={newTask.priority} onChange={handleInputChange}>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
