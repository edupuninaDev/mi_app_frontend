import { useEffect, useMemo, useState } from "react";
import { getProducts, type Product } from "../services/productService";

export default function Inicio() {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const loadProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        };

        loadProducts();
    }, []);

    const filteredProducts = useMemo(
        () =>
            products.filter((product) =>
                [product.name, product.category]
                    .join(" ")
                    .toLowerCase()
                    .includes(search.toLowerCase())
            ),
        [products, search]
    );

    return (
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <section className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-slate-50 p-4 shadow-sm sm:p-6">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">Tus productos</p>
                        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Encuéntralos aquí</h1>
                    </div>

                    <div className="rounded-3xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200 sm:px-5 sm:py-4">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className="text-xs uppercase text-slate-500">WebStore</p>
                                <p className="text-sm font-semibold text-slate-900">Tu tienda</p>
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-white shadow-sm">
                                <span className="text-lg font-bold">W</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-sm sm:px-5 sm:py-4">
                    <div className="flex items-center gap-3">
                        <span className="text-slate-400">🔍</span>
                        <input
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Encuéntralos aquí"
                            className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                        />
                    </div>
                </div>
            </section>

            <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.length === 0 ? (
                    <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center text-slate-500 shadow-sm">
                        No se encontraron productos.
                    </div>
                ) : (
                    filteredProducts.map((product) => (
                        <article
                            key={product.id}
                            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            <div className="relative overflow-hidden bg-slate-100 p-0 sm:p-0">
                                <img
                                    src={product.imageSrc}
                                    alt={product.name}
                                    className="h-40 w-full rounded-lg object-cover"
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white bg-white text-slate-900 shadow-lg transition hover:bg-slate-100"
                                    aria-label={`Agregar ${product.name}`}
                                >
                                    +
                                </button>
                            </div>

                            <div className="space-y-2 px-4 pb-5 pt-4 sm:px-5 sm:pb-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                                    {product.category}
                                </p>
                                <h2 className="text-base font-semibold text-slate-900 sm:text-lg">
                                    {product.name}
                                </h2>
                                <p className="text-sm font-semibold text-slate-900">${product.price}</p>
                            </div>
                        </article>
                    ))
                )}
            </section>
        </main>
    );
}