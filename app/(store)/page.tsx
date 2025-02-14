import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import ProductsView from "@/components/ProductsView";
import BlackFridayBanner from "@/components/BlackFridayBanner";

export default async function Home() {
  // Fetch products and categories from Sanity
  const products = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <div /*className="min-h-screen bg-gray-100 p-4"*/>
      <BlackFridayBanner />
      {/* Page Header */}
      <h1 className="text-2xl font-bold text-center mb-6">Welcome to Our Store</h1>

      {/* Products & Categories Section */}
      <div className="flex flex-col items-center">
        <ProductsView products={products}  categories={categories}/>
      </div>
    </div>
  );
}
