export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  imageSrc: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Camiseta roja deportiva",
    price: 15,
    category: "Ropa",
    imageSrc: new URL("../assets/camiseta.png", import.meta.url).href,
  },
  {
    id: 2,
    name: "Auriculares inalámbricos azules",
    price: 25,
    category: "Tecnología",
    imageSrc: new URL("../assets/audifonos.png", import.meta.url).href,
  },
  {
    id: 3,
    name: "Abrigo largo café",
    price: 48,
    category: "Ropa",
    imageSrc: new URL("../assets/abrigo.png", import.meta.url).href,
  },
  {
    id: 4,
    name: "Set de aretes dorados",
    price: 5,
    category: "Accesorios",
    imageSrc: new URL("../assets/aretes.png", import.meta.url).href,
  },
];

export const getProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
