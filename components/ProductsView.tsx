import { Category, Product } from "@/sanity.types";
import ProductGrid from "./ProductGrid";
import CategorySelectorComponent from "./CategorySelectorComponent"; // Import the component


interface ProductsViewProps {
    products: Product[];
    categories: Category[];
}

const ProductsView = ({ products, categories }: ProductsViewProps) => {
    return (
        <div className="flex flex-col">
            {/* Categories */}
            <div className="w-full sm:w-[200px]">
                {<CategorySelectorComponent categories={categories} /> }
            </div>
            {/* Products */}
            <div className="flex-1">
                <div>
                    <ProductGrid products={products} />
                    <hr className="w-12 sm:w-12" />
                </div>
            </div>
        </div>
    );
};

export default ProductsView;