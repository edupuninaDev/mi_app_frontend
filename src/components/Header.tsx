import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { to: "/inicio", label: "Inicio" },
        { to: "/contacto", label: "Contacto" },
        { to: "/tareas", label: "Tareas" },
    ];

    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
                <h1 className="text-lg font-bold sm:text-xl">Mi App</h1>

                {/* Menú hamburguesa para móvil */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-1.5"
                    aria-label="Toggle menu"
                >
                    <span className={`h-0.5 w-6 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`h-0.5 w-6 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`h-0.5 w-6 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {/* Navegación - Desktop */}
                <nav className="hidden md:flex gap-2 lg:gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="rounded px-3 py-2 text-sm lg:text-base font-medium hover:bg-blue-700 transition"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Menú móvil desplegable */}
            {isMenuOpen && (
                <nav className="md:hidden border-t border-blue-500 bg-blue-700">
                    <div className="px-4 py-3 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsMenuOpen(false)}
                                className="block rounded px-3 py-2 text-base font-medium hover:bg-blue-600 transition"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}