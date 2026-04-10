import { useState, type FormEvent } from "react";

interface Props {
    onAddTask: (text: string) => void;
}

export default function TaskForm({ onAddTask }: Props) {
    const [text, setText] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!text.trim()) return;

        onAddTask(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 flex flex-col sm:flex-row gap-2">
            <input
                type="text"
                placeholder="Nueva tarea..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 sm:py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <button className="rounded-lg bg-blue-600 px-4 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-white hover:bg-blue-700 transition active:scale-95">
                Agregar
            </button>
        </form>
    );
}