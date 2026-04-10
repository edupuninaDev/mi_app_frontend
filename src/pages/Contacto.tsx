export default function Contacto() {
    return (
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 sm:mb-6 sm:text-3xl">Contacto</h2>

            <div className="rounded-lg sm:rounded-xl bg-white p-4 sm:p-6 shadow hover:shadow-lg transition-shadow max-w-2xl">
                <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-700">
                    Puedes comunicarte con nosotros a través de:
                </p>
                <div className="space-y-2 sm:space-y-3">
                    <p className="text-gray-600 text-sm sm:text-base">
                        <span className="font-medium">Correo:</span>{" "}
                        <a href="mailto:contacto@miapp.com" className="text-blue-600 hover:underline">
                            contacto@miapp.com
                        </a>
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                        <span className="font-medium">Teléfono:</span>{" "}
                        <a href="tel:+593999999999" className="text-blue-600 hover:underline">
                            +593 999 999 999
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}