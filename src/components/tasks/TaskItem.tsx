export interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface Props {
    task: Task;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function TaskItem({ task, onToggle, onDelete }: Props) {
    return (
        <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 rounded-lg border border-gray-200 p-3 sm:p-4 hover:bg-gray-50 transition">
            <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    className="mt-1 sm:mt-0 w-4 h-4 cursor-pointer flex-shrink-0"
                />

                <div className="flex-1 min-w-0">
                    <p
                        className={`text-sm sm:text-base font-medium break-words ${task.completed
                            ? "line-through text-gray-400"
                            : "text-gray-800"
                            }`}
                    >
                        {task.text}
                    </p>

                    <span
                        className={`text-xs sm:text-sm font-medium ${task.completed ? "text-green-600" : "text-yellow-600"
                            }`}
                    >
                        {task.completed ? "Completada" : "Pendiente"}
                    </span>
                </div>
            </div>

            <button
                onClick={() => onDelete(task.id)}
                className="w-full sm:w-auto rounded px-3 py-1.5 sm:py-2 text-red-500 hover:bg-red-50 active:scale-95 transition font-medium text-sm sm:text-base"
            >
                Eliminar
            </button>
        </li>
    );
}