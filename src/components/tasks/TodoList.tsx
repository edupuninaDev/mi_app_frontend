export interface Task {
    id: number;
    text: string;
    completed: boolean;
}

import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

export default function TodoList() {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });



    // Guardar en localStorage
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (text: string) => {
        const newTask: Task = {
            id: Date.now(),
            text,
            completed: false,
        };

        setTasks([...tasks, newTask]);
    };

    const toggleTask = (id: number) => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-4 sm:px-6 sm:py-6">
            <div className="rounded-lg sm:rounded-xl bg-white p-4 sm:p-6 shadow-md">
                <h2 className="mb-4 text-2xl font-bold text-gray-800 sm:mb-6 sm:text-3xl">Lista de Tareas</h2>

                <TaskForm onAddTask={addTask} />

                <ul className="space-y-2 sm:space-y-3">
                    {tasks.length === 0 && (
                        <p className="text-center text-sm sm:text-base text-gray-500 py-4">No hay tareas aún</p>
                    )}

                    {tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onToggle={toggleTask}
                            onDelete={deleteTask}
                        />
                    ))}
                </ul>
            </div>
        </main>
    );
}