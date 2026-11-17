import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/type";

export default async function Home() {

  const response = await fetch("https://api.api-store.workers.dev/api/bazardor/products")
  const all_Products: Product[] = await response.json();

  const priceUp: Product[] = all_Products.filter((item) => item.change.dir === 'up').slice(0, 6);
  const priceDown: Product[] = all_Products.filter((item) => item.change.dir === 'down').slice(0, 6);


  return (
    <div className="bg-[#F0F5F0]">
      <Hero />

      <div className="max-w-7xl mx-auto px-4 py-4">

        <h1 className="text-2xl font-bold"><span className="text-red-600 mr-1.5">▲</span>আজ দাম বেড়েছে</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">

          {priceUp.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          


        </div>

      </div>

    </div >
  );
}
