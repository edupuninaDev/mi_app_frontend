import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import TodoList from "./components/tasks/TodoList";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-gray-100">

        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/tareas" element={<TodoList />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;