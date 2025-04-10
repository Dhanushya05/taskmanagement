import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TaskList.css";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: "", description: "", priority: "Medium" });

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/tasks");
            setTasks(response.data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };

    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/tasks", newTask);
            loadTasks();
            setNewTask({ title: "", description: "", priority: "Medium" });
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/tasks/${id}`);
            loadTasks();
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <div className="task-dashboard">
            <h2>Task Dashboard</h2>
            <div className="task-dashboard-container">
                <div className="task-form-container">
                    <h3>Add a New Task</h3>
                    <form onSubmit={handleAddTask} className="task-form">
                        <input
                            type="text"
                            name="title"
                            value={newTask.title}
                            onChange={handleInputChange}
                            placeholder="Task Title"
                            required
                        />
                        <textarea
                            name="description"
                            value={newTask.description}
                            onChange={handleInputChange}
                            placeholder="Task Description"
                            required
                        ></textarea>
                        <select name="priority" value={newTask.priority} onChange={handleInputChange}>
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                        <button type="submit">Add Task</button>
                    </form>
                </div>

                <div className="task-list-section">
                    <h3>My Tasks</h3>
                    <ul className="task-list">
                        {tasks.map((task) => (
                            <li key={task.id} className="task-item">
                                <div className="task-info">
                                    <strong>{task.title}</strong> - {task.description}
                                    <span className={`priority ${task.priority.toLowerCase()}`}>
                                        ({task.priority} Priority)
                                    </span>
                                </div>
                                <button onClick={() => handleDelete(task.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TaskList;
